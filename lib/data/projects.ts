export type Project = {
  id: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  metric: string;
  metricLabel: string;
  architecture: string[];
};

export const projects: Project[] = [
  {
    id: "neural-net-edge",
    name: "NEURAL_NET_EDGE",
    category: "OBSERVABILITY / EDGE",
    summary:
      "An edge-first monitoring console that turns distributed signals into actionable, low-latency operational views.",
    description:
      "A monitoring dashboard concept for distributed infrastructure. Its interface prioritizes fast signal triage, clear health states, and a compact operational view for edge workloads.",
    stack: ["Next.js", "TypeScript", "Rust / WASM", "WebSockets"],
    metric: "< 40 ms",
    metricLabel: "TARGET SIGNAL REFRESH",
    architecture: [
      "Edge collectors normalize telemetry close to the source.",
      "A typed event stream feeds a responsive Next.js operations console.",
      "Rust/WASM modules handle high-volume client-side signal processing.",
    ],
  },
  {
    id: "auto-scale-ops",
    name: "AUTO_SCALE_OPS",
    category: "PLATFORM / ORCHESTRATION",
    summary:
      "A distributed cluster operations toolkit for capacity signals, workload placement, and automated scaling decisions.",
    description:
      "A platform engineering concept for cluster operators. It brings workload health, scaling policy, and node capacity into a single control surface with safe, observable automation.",
    stack: ["Kubernetes", "Go", "Prometheus", "gRPC"],
    metric: "3 zones",
    metricLabel: "FAULT-DOMAIN MODEL",
    architecture: [
      "Go control-plane services reconcile desired and observed cluster state.",
      "Prometheus metrics provide workload and node-level capacity signals.",
      "Kubernetes policies coordinate placement across independent fault domains.",
    ],
  },
  {
    id: "qubit-interface",
    name: "QUBIT_INTERFACE",
    category: "SECURITY / PROTOCOL DESIGN",
    summary:
      "A low-latency interface concept for exploring zero-knowledge proofs and privacy-preserving protocol flows.",
    description:
      "A cryptographic interface concept focused on making complex proof flows legible. It separates user-facing protocol state from the underlying verification lifecycle.",
    stack: ["TypeScript", "WebCrypto", "Zero-knowledge proofs", "WebAssembly"],
    metric: "0 trust",
    metricLabel: "VERIFICATION MODEL",
    architecture: [
      "Client-side proof preparation keeps sensitive inputs local.",
      "Explicit protocol states make verification outcomes auditable.",
      "WebCrypto and WebAssembly provide a browser-native execution path.",
    ],
  },
  {
    id: "crypto-log-analyzer",
    name: "CRYPTO_LOG_ANALYZER",
    category: "DATA / TELEMETRY",
    summary:
      "A streaming analysis engine concept for structured log ingestion, anomaly signals, and searchable event timelines.",
    description:
      "A real-time telemetry pipeline concept that organizes high-volume application events into useful operational context, pairing structured ingestion with fast investigation workflows.",
    stack: ["Node.js", "PostgreSQL", "Redis", "Kafka"],
    metric: "12.4k+",
    metricLabel: "EVENTS / SECOND TARGET",
    architecture: [
      "Ingestion workers validate and normalize events at the boundary.",
      "A durable stream decouples producers from analytics consumers.",
      "PostgreSQL and Redis support searchable history and hot operational views.",
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
