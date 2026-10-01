import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/lib/data/projects";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="site-shell">
      <div className="page-top">
        <Link className="detail-back" href="/projects">
          <ArrowLeft aria-hidden="true" size={14} />
          BACK TO PROJECT INVENTORY
        </Link>
        <div className="eyebrow" style={{ marginTop: 31 }}>
          {project.category}
        </div>
        <h1 className="detail-title">{project.name}</h1>
        <p className="page-intro">{project.description}</p>
        <div className="detail-meta">
          <span className="tag">PROJECT / {id.toUpperCase()}</span>
          <span className="tag">ARCHITECTURE OVERVIEW</span>
        </div>
      </div>

      <div className="page-main">
        <section aria-labelledby="architecture-title" className="section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">SYSTEM DESIGN / OVERVIEW</div>
              <h2 id="architecture-title">Architecture notes.</h2>
            </div>
            <span className="availability">STATIC BUILD / READY</span>
          </div>
          <div className="contact-layout">
            <div className="surface-card" style={{ padding: 22 }}>
              <div className="mono-label">CORE TECHNOLOGIES</div>
              <div className="tag-list" style={{ marginTop: 16 }}>
                {project.stack.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              <div className="surface-card detail-stat" style={{ marginTop: 25 }}>
                <span className="metric-label">{project.metricLabel}</span>
                <strong>{project.metric}</strong>
              </div>
            </div>
            <div className="surface-card" style={{ padding: 22 }}>
              <div className="mono-label">COMPONENT FLOW</div>
              <ul className="architecture-list" style={{ marginTop: 18 }}>
                {project.architecture.map((step) => (
                  <li key={step}>
                    <Check aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Link className="text-link" href="/contact">
          Discuss a similar system <ArrowRight aria-hidden="true" size={14} />
        </Link>
      </div>
    </div>
  );
}
