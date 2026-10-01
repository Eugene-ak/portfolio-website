import { Check } from "lucide-react";

const modules = [
  "frontend.runtime ............ React / Next.js / TypeScript",
  "data.pipeline ............... Node.js / PostgreSQL / Redis",
  "infrastructure ............. Docker / Kubernetes / AWS",
  "network.stack .............. Linux / TCP-IP / OSPF",
];

export function CapabilitiesLog() {
  return (
    <div aria-label="System capabilities terminal output" className="terminal">
      <div className="terminal-header">
        <span className="terminal-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>capabilities.log — /usr/local/architect</span>
        <span>LIVE</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-prompt">root@kinetic:~$</span>
          <span className="terminal-command">fetch system_capabilities</span>
        </div>
        <span className="terminal-muted">Initializing runtime modules…</span>
        {modules.map((module) => (
          <div className="terminal-line" key={module}>
            <span className="terminal-success">
              <Check aria-hidden="true" size={13} />
            </span>
            <span>{module}</span>
          </div>
        ))}
        <span className="terminal-success">[exit 0] 4 MODULES READY // 0 ERRORS FOUND</span>
      </div>
    </div>
  );
}
