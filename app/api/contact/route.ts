import { createHash, timingSafeEqual } from "node:crypto";
import { z } from "zod";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 8_192;
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

const contactSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.email().max(254),
  message: z.string().trim().min(10).max(4_000),
  website: z.string().max(0).optional(),
});

function jsonResponse(message: string, status: number) {
  return Response.json({ message }, { status });
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return (realIp ?? forwardedFor?.split(",")[0]?.trim() ?? "unknown").slice(0, 80);
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const current = rateLimitBuckets.get(clientKey);

  if (!current || current.resetAt <= now) {
    rateLimitBuckets.set(clientKey, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });

    if (rateLimitBuckets.size > 1_000) {
      for (const [key, bucket] of rateLimitBuckets) {
        if (bucket.resetAt <= now) rateLimitBuckets.delete(key);
      }
    }
    return false;
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) return true;
  current.count += 1;
  return false;
}

function hasValidPayloadDigest(rawBody: string, suppliedDigest: string | null) {
  if (!suppliedDigest || !/^[a-f\d]{64}$/i.test(suppliedDigest)) return false;

  const expected = Buffer.from(
    createHash("sha256").update(rawBody).digest("hex"),
    "hex",
  );
  const supplied = Buffer.from(suppliedDigest, "hex");
  return expected.length === supplied.length && timingSafeEqual(expected, supplied);
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return jsonResponse("Expected an application/json request.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse("The message is too large.", 413);
  }

  if (isRateLimited(getClientKey(request))) {
    return jsonResponse("Too many messages. Please try again in a minute.", 429);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse("The request body could not be read.", 400);
  }

  if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return jsonResponse("The message is too large.", 413);
  }

  if (!hasValidPayloadDigest(rawBody, request.headers.get("x-payload-sha256"))) {
    return jsonResponse("Payload integrity validation failed. Please retry.", 400);
  }

  let input: unknown;
  try {
    input = JSON.parse(rawBody);
  } catch {
    return jsonResponse("The request body must contain valid JSON.", 400);
  }

  const result = contactSchema.safeParse(input);
  if (!result.success) {
    return jsonResponse(
      "Please provide a valid name, email address, and message (10–4,000 characters).",
      400,
    );
  }

  if (result.data.website) {
    return jsonResponse("This message could not be accepted.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return jsonResponse(
      "Message delivery is not configured yet. Please use the direct email link.",
      503,
    );
  }

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: result.data.email,
        subject: "Portfolio contact request",
        text: [
          `From: ${result.data.name}`,
          `Email: ${result.data.email}`,
          "",
          result.data.message,
        ].join("\n"),
      }),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      console.error("Contact email provider rejected the request", {
        status: emailResponse.status,
      });
      return jsonResponse("The email provider could not accept the message.", 502);
    }
  } catch (error) {
    console.error("Contact email delivery failed", error);
    return jsonResponse("Message delivery failed. Please retry or email directly.", 502);
  }

  return jsonResponse("Handshake accepted. Your message has been delivered.", 200);
}
