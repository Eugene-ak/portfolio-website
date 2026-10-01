import {
  ArrowDownRight,
  ArrowRight,
  Award,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { CapabilitiesLog } from "@/components/terminal/capabilities-log";
import { projects } from "@/lib/data/projects";

const competencies = [
  {
    index: "DEV_STK // 01",
    title: "Frontend systems",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    index: "DEV_STK // 02",
    title: "Application logic",
    icon: Database,
    skills: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    index: "DEV_STK // 03",
    title: "Infrastructure",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

const certifications = [
  { name: "AWS Certified", focus: "Solutions Architect", icon: Cloud },
  { name: "Google Cloud", focus: "Cloud Engineer", icon: Server },
  { name: "CCNA", focus: "200-301 Networking", icon: Network },
  { name: "CompTIA", focus: "A+ / Network+", icon: Award },
];

export default function Home() {
  return (
    <div className="site-shell">
      <section className="hero">
        <div className="fade-up">
          <div className="eyebrow">WEB DEVELOPER &amp; IT SYSTEMS ARCHITECT</div>
          <h1>
            Architecting
            <br />
            Digital <span>Foundations.</span>
          </h1>
          <p className="hero-copy">
            I bridge <strong>responsive web applications</strong> and{" "}
            <strong>resilient infrastructure</strong>—from thoughtful
            interfaces to the systems, networks, and platforms that keep them
            running.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              <Terminal size={15} />
              INITIALIZE_CONTACT
              <ArrowRight size={15} />
            </Link>
            <Link className="button button-secondary" href="/projects">
              EXPLORE_PROJECTS
              <ArrowDownRight size={15} />
            </Link>
          </div>
          <div className="hero-note">
            <ShieldCheck size={15} />
            ENGINEERED FOR RELIABILITY · BUILT WITH INTENT
          </div>
        </div>

        <div aria-label="Infrastructure systems illustration" className="hero-visual fade-up">
          <div className="visual-topline">
            <span>ARCHITECTURE / NODE_01</span>
            <span>SECURE LINK</span>
          </div>
          <div aria-hidden="true" className="visual-core">
            <Cpu />
          </div>
          <span aria-hidden="true" className="visual-node visual-node-one">
            <Code2 />
          </span>
          <span aria-hidden="true" className="visual-node visual-node-two">
            <Network />
          </span>
          <span aria-hidden="true" className="visual-node visual-node-three">
            <Database />
          </span>
          <span aria-hidden="true" className="visual-node visual-node-four">
            <LockKeyhole />
          </span>
          <span className="status-pill">
            <span aria-hidden="true" className="status-dot" />
            SYSTEM ONLINE // 99.99%
          </span>
          <div className="visual-caption">
            <span>WEB // CLOUD // HARDWARE</span>
            <span>LAT 52.52° N</span>
          </div>
        </div>
      </section>

      <section aria-labelledby="competencies-title" className="section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">CAPABILITY MATRIX / 01</div>
            <h2 id="competencies-title">One engineer. Full stack.</h2>
          </div>
          <p>
            Practical range across product engineering and the infrastructure
            beneath it.
          </p>
        </div>
        <div className="competency-grid">
          {competencies.map(({ icon: Icon, ...item }) => (
            <article className="surface-card competency-card" key={item.index}>
              <div className="card-index">{item.index}</div>
              <span className="competency-icon">
                <Icon aria-hidden="true" size={18} />
              </span>
              <h3>{item.title}</h3>
              <div className="tag-list">
                {item.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="terminal-title" className="section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">RUNTIME / DIAGNOSTICS</div>
            <h2 id="terminal-title">Capabilities initialized.</h2>
          </div>
          <p>Selected modules available across the development lifecycle.</p>
        </div>
        <CapabilitiesLog />
      </section>

      <section aria-labelledby="credentials-title" className="section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">TRUST / CREDENTIALS</div>
            <h2 id="credentials-title">Certification matrix.</h2>
          </div>
          <p>Cloud architecture, networking, and systems foundations.</p>
        </div>
        <div className="cert-grid">
          {certifications.map(({ icon: Icon, ...item }) => (
            <div className="cert-badge" key={item.name}>
              <Icon aria-hidden="true" />
              <span>
                {item.name}
                <small>{item.focus}</small>
              </span>
            </div>
          ))}
        </div>
        <div className="hero-actions">
          <Link className="text-link" href="/services">
            Explore IT services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">SELECTED WORK / 02</div>
            <h2>Systems in motion.</h2>
          </div>
          <Link className="text-link" href="/projects">
            PROJECT INVENTORY <GitBranch size={14} />
          </Link>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 2).map((project, index) => (
            <article className="surface-card featured-card" key={project.id}>
              <div className="project-card-top">
                <span className="card-index">FEATURED / 0{index + 1}</span>
                <span className="availability">
                  <span aria-hidden="true" className="status-dot" />
                  {project.category}
                </span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <Link className="text-link" href={`/projects/${project.id}`}>
                VIEW ARCHITECTURE <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
