import type { Metadata } from "next";
import { AtSign, MapPin, ShieldCheck, UserRound } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "About & Contact",
  description:
    "Learn about the Kinetic Infrastructure engineering approach and initiate a project conversation.",
};

const practices = [
  {
    title: "Technical integrity",
    description:
      "Maintainable systems, strict contracts, explicit failure states, and dependable operations.",
  },
  {
    title: "Human-centric UX",
    description:
      "Fast, accessible interfaces with deliberate interactions and a clear information hierarchy.",
  },
];

export default function ContactPage() {
  return (
    <div className="site-shell">
      <div className="page-top">
        <div className="eyebrow">ABOUT / SECURE CHANNEL</div>
        <h1 className="page-title">
          Good systems
          <br />
          <span style={{ color: "var(--primary)" }}>serve people.</span>
        </h1>
        <p className="page-intro">
          I work across the boundary between software and infrastructure:
          dependable applications, understandable systems, and operational
          experiences built around the people who use them.
        </p>
      </div>

      <div className="page-main">
        <div className="contact-layout">
          <div>
            <section aria-label="Profile" className="surface-card contact-panel">
              <div className="profile-avatar">
                <UserRound aria-hidden="true" />
              </div>
              <div className="mono-label">IMG_UID // ARCH-01</div>
              <h2 className="profile-name">Web Developer &amp; IT Architect</h2>
              <p className="profile-summary">
                A systems-minded builder focused on full-stack engineering,
                enterprise infrastructure, and resilient user experiences.
              </p>
              <div className="tag-list">
                <span className="tag">Full-stack</span>
                <span className="tag">Cloud &amp; Linux</span>
                <span className="tag">Networks</span>
                <span className="tag">Reliability</span>
              </div>
              <div className="contact-vectors">
                <a className="contact-vector" href="mailto:root@system-architect.dev">
                  <AtSign aria-hidden="true" />
                  root@system-architect.dev
                </a>
                <span className="contact-vector">
                  <MapPin aria-hidden="true" />
                  BERLIN_NODE // REMOTE
                </span>
              </div>
            </section>

            <section aria-label="Engineering principles" className="section">
              <div className="section-heading">
                <div>
                  <div className="section-kicker">PILLARS OF PRACTICE</div>
                  <h2>How I build.</h2>
                </div>
              </div>
              <div className="pillar-grid">
                {practices.map((practice) => (
                  <article className="surface-card pillar-card" key={practice.title} style={{ padding: 18 }}>
                    <h3>{practice.title}</h3>
                    <p>{practice.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
          <ContactForm />
        </div>
        <div className="availability" style={{ marginTop: 23 }}>
          <ShieldCheck aria-hidden="true" size={14} />
          PRIVATE BY DEFAULT // VALIDATED BEFORE DELIVERY
        </div>
      </div>
    </div>
  );
}
