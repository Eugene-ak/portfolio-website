"use client";

import { ArrowRight, LoaderCircle, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";

type Feedback = { kind: "success" | "error"; message: string } | null;

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

export function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };
    const body = JSON.stringify(payload);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Payload-SHA256": await sha256(body),
        },
        body,
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setFeedback({
          kind: "error",
          message: result.message ?? "The message could not be delivered.",
        });
        return;
      }

      form.reset();
      setFeedback({
        kind: "success",
        message: result.message ?? "Handshake accepted.",
      });
    } catch {
      setFeedback({
        kind: "error",
        message: "Network error. Please retry or use the direct email link.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="surface-card contact-form-panel">
      <div className="section-heading">
        <div>
          <div className="section-kicker">INITIATE HANDSHAKE</div>
          <h2 className="content-heading">Send a payload.</h2>
        </div>
        <ShieldCheck aria-hidden="true" color="var(--secondary)" size={20} />
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input
            autoComplete="off"
            id="website"
            name="website"
            tabIndex={-1}
            type="text"
          />
        </div>
        <div className="form-field">
          <label htmlFor="name">SENDER_NAME / IDENTITY</label>
          <input
            autoComplete="name"
            id="name"
            maxLength={80}
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">EMAIL_ENDPOINT / REPLY ADDRESS</label>
          <input
            autoComplete="email"
            id="email"
            maxLength={254}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">PAYLOAD_MESSAGE / PROJECT PARAMETERS</label>
          <textarea
            id="message"
            maxLength={4000}
            name="message"
            placeholder="Tell me a little about what you are building..."
            required
            rows={5}
          />
        </div>
        <p className="form-note">
          Fields are validated server-side and the request body is SHA-256
          checked before dispatch.
        </p>
        {feedback && (
          <p
            aria-live="polite"
            className={`form-feedback${feedback.kind === "success" ? " success" : ""}`}
            role={feedback.kind === "error" ? "alert" : "status"}
          >
            {feedback.message}
          </p>
        )}
        <button
          className="button button-primary"
          disabled={isSending}
          type="submit"
        >
          {isSending ? (
            <LoaderCircle aria-hidden="true" className="animate-spin" size={15} />
          ) : (
            <ArrowRight aria-hidden="true" size={15} />
          )}
          {isSending ? "TRANSMITTING..." : "EXECUTE_SEND"}
        </button>
      </form>
    </div>
  );
}
