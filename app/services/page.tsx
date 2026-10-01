import type { Metadata } from "next";
import {
  Activity,
  Cpu,
  HardDrive,
  Network,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Services & Expertise",
  description:
    "Technical support, hardware systems, enterprise connectivity, and infrastructure expertise.",
};

const services = [
  {
    title: "Technical_Support / TIER_3",
    icon: ShieldCheck,
    description:
      "Structured incident escalation, Linux diagnostics, vulnerability patch automation, and pragmatic disaster recovery planning.",
    tags: ["Incident response", "Linux", "Patch automation"],
  },
  {
    title: "Hardware_Systems",
    icon: Cpu,
    description:
      "Workstation calibration, RAID storage arrays, NVMe deployments, and methodical hardware troubleshooting.",
    tags: ["Workstations", "RAID / NVMe", "Diagnostics"],
  },
  {
    title: "Connectivity_Networking",
    icon: Network,
    description:
      "Layer 2/3 switching, VPN tunnels, SD-WAN planning, and routing fundamentals for reliable connectivity.",
    tags: ["Switching", "VPN", "OSPF / BGP"],
  },
];

const skillGroups = [
  {
    label: "OS / KERNELS",
    skills: ["Debian", "Arch Linux", "RHEL", "Kernel diagnostics"],
  },
  {
    label: "NETWORK / OSI",
    skills: ["OSI Layers", "TCP/IP", "VLAN", "OSPF", "BGP", "SD-WAN"],
  },
  {
    label: "SERVER / HARDWARE",
    skills: ["Dell EMC", "Cisco UCS", "RAID", "NVMe", "iDRAC"],
  },
  {
    label: "VIRTUALIZATION",
    skills: ["VMware ESXi", "Proxmox", "Docker", "Kubernetes"],
  },
];

export default function ServicesPage() {
  return (
    <div className="site-shell">
      <div className="page-top">
        <div className="eyebrow">INFRASTRUCTURE / FIELD NOTES</div>
        <h1 className="page-title">
          Reliable systems
          <br />
          <span style={{ color: "var(--primary)" }}>start below the UI.</span>
        </h1>
        <p className="page-intro">
          Hands-on support across networks, servers, operating systems, and the
          hardware that brings them together.
        </p>
      </div>

      <div className="page-main">
        <section aria-label="Service domains" className="service-grid">
          {services.map(({ icon: Icon, ...service }) => (
            <article className="surface-card service-card" key={service.title}>
              <span className="service-card-icon">
                <Icon aria-hidden="true" size={18} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-list">
                {service.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section aria-labelledby="diagnostics-title" className="section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">DIAGNOSTIC TERMINAL</div>
              <h2 id="diagnostics-title">SCAN_EXPERTISE</h2>
            </div>
            <span className="availability">
              <Activity aria-hidden="true" size={14} />
              HEALTHY
            </span>
          </div>
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-lights" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>infra-diagnostics — /ops/checks</span>
              <Terminal aria-hidden="true" size={14} />
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">ops@node:~$</span>
                <span className="terminal-command">scan_expertise --full</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-success">[OK]</span>
                <span>Memory latency baseline ........ verified</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-success">[OK]</span>
                <span>Threat model / patch posture .... reviewed</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-success">[OK]</span>
                <span>Redundancy paths ............... validated</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-muted">Scan complete — 3 checks passed.</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="skills-title" className="section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">SKILL MATRIX / HARDWARE TO CLOUD</div>
              <h2 id="skills-title">Operational range.</h2>
            </div>
            <HardDrive aria-hidden="true" color="var(--primary)" size={20} />
          </div>
          <div className="surface-card">
            {skillGroups.map((group) => (
              <div className="skill-matrix" key={group.label}>
                <div className="skill-matrix-label">{group.label}</div>
                <div className="skill-cloud">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="case-title" className="section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">CASE STUDY / RESILIENCE</div>
              <h2 id="case-title">Enterprise network transformation.</h2>
            </div>
          </div>
          <article className="surface-card case-study">
            <div>
              <div className="mono-label">OUTCOME PROFILE</div>
              <h3>Less latency. More headroom.</h3>
              <p>
                A representative transformation profile: modernize network
                topology, consolidate virtualized workloads, and strengthen
                redundancy to improve service continuity.
              </p>
            </div>
            <div className="case-metrics">
              <div className="case-metric">
                <strong>99.999%</strong>
                <span>SLA ACHIEVEMENT</span>
              </div>
              <div className="case-metric">
                <strong>-45%</strong>
                <span>LATENCY REDUCTION</span>
              </div>
              <div className="case-metric">
                <strong>HA</strong>
                <span>VIRTUALIZATION MIGRATION</span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
