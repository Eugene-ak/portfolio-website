import type { Metadata } from "next";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://system-architect.dev"),
  title: {
    default: "Kinetic Infrastructure | Web Developer & IT Systems Architect",
    template: "%s | Kinetic Infrastructure",
  },
  description:
    "Full-stack web development and enterprise IT systems engineering, from responsive applications to resilient infrastructure.",
  openGraph: {
    title: "Kinetic Infrastructure",
    description:
      "Web Developer & IT Systems Architect. Architecting digital foundations.",
    siteName: "Kinetic Infrastructure",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic Infrastructure",
    description: "Web Developer & IT Systems Architect.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        <main className="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
