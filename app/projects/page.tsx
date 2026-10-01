import type { Metadata } from "next";
import { Activity, ArrowRight, GitCommitHorizontal } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore web, edge, platform, and security project architecture.",
};

export default function ProjectsPage() {
  return (
    <div className="site-shell">
      <div className="page-top">
        <div className="eyebrow">SYSTEMS / SELECTED WORK</div>
        <h1 className="page-title">
          Designed to work
          <br />
          <span style={{ color: "var(--primary)" }}>under pressure.</span>
        </h1>
        <p className="page-intro">
          An inventory of engineering concepts across application development,
          distributed infrastructure, and security.
        </p>
      </div>

      <div className="page-main">
        <section aria-label="Project inventory">
          <div className="section-heading">
            <div>
              <div className="section-kicker">PROJECT INVENTORY V2.04</div>
              <h2>Selected systems</h2>
            </div>
            <span className="availability">
              <Activity aria-hidden="true" size={14} />
              {String(projects.length).padStart(2, "0")} SYSTEMS INDEXED
            </span>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="surface-card project-card" key={project.id}>
                <div className="project-card-top">
                  <span className="project-icon">
                    <GitCommitHorizontal aria-hidden="true" size={18} />
                  </span>
                  <span className="card-index">
                    {String(index + 1).padStart(2, "0")} / 04
                  </span>
                </div>
                <div className="card-meta" style={{ marginTop: 17 }}>
                  {project.category}
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="tag-list" style={{ marginBottom: 18 }}>
                  {project.stack.map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="project-card-bottom">
                  <span className="card-meta">{project.metricLabel}</span>
                  <Link className="text-link" href={`/projects/${project.id}`}>
                    TECHNICAL DEEP DIVE <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="System metrics" className="section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">SYSTEM METRICS / LEDGER</div>
              <h2>Operational mindset.</h2>
            </div>
            <p>Measure what matters. Design systems that are easy to operate.</p>
          </div>
          <div className="metric-grid">
            <div className="surface-card metric-card">
              <span className="metric-label">UPTIME TARGET</span>
              <strong className="metric-value is-green">99.99%</strong>
            </div>
            <div className="surface-card metric-card">
              <span className="metric-label">EVENTS PROCESSED</span>
              <strong className="metric-value">12.4k+</strong>
            </div>
            <div className="surface-card metric-card">
              <span className="metric-label">EDGE INSTANCES</span>
              <strong className="metric-value">03 zones</strong>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
