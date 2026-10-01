# Kinetic Infrastructure

A responsive, dark-mode portfolio for a web developer and IT systems architect. Built with Next.js App Router, TypeScript, Tailwind CSS 4, and Lucide icons.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Use `pnpm build` to create a production build and `pnpm start` to serve it.

## Routes

- `/` — portfolio overview, capabilities terminal, credentials, and featured work
- `/projects` — project catalog and operational metrics
- `/projects/[id]` — statically generated project architecture details
- `/services` — infrastructure services, skill matrix, and case study
- `/contact` — profile, engineering principles, and contact form
- `/api/contact` — validated, rate-limited contact submission endpoint

## Contact delivery

The contact endpoint validates submitted fields with Zod, checks a SHA-256 request digest, rejects honeypot submissions, and allows five submissions per minute per server instance. Email delivery uses the Resend API and requires these server-side environment variables:

```text
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

Configure a verified sender address in Resend before enabling delivery. If any value is missing, the endpoint returns an explicit service-unavailable response and the contact page offers the direct email link instead. The in-memory rate limiter is per process; replace it with a shared store for horizontally scaled production deployments.

## Content

Project entries and their architecture summaries are maintained in `lib/data/projects.ts`. Replace the illustrative portfolio content, credentials, contact address, and supplied case-study metrics with verified personal details before publishing.
