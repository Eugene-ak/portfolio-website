import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 80% 10%, #12304a, transparent 35%), #060e20",
          color: "#f1f5f9",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "78px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#38bdf8",
              display: "flex",
              fontSize: 22,
              letterSpacing: 5,
            }}
          >
            DEV_PORTFOLIO // 2026
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.12,
            }}
          >
            <span>Architecting</span>
            <span style={{ color: "#38bdf8" }}>Digital Foundations.</span>
          </div>
          <div style={{ color: "#94a3b8", display: "flex", fontSize: 25 }}>
            Web Developer &amp; IT Systems Architect
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            border: "1px solid #38bdf866",
            borderRadius: 32,
            color: "#10b981",
            display: "flex",
            fontSize: 26,
            height: 170,
            justifyContent: "center",
            width: 170,
          }}
        >
          SYS // ONLINE
        </div>
      </div>
    ),
    size,
  );
}
