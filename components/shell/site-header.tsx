"use client";

import { Menu, Terminal, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link
          aria-label="Kinetic Infrastructure home"
          className="brand"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <span className="brand-mark">
            <Terminal size={17} strokeWidth={2} />
          </span>
          <span>
            DEV_PORTFOLIO <span className="brand-slash">{"//"}</span> 2026
          </span>
        </Link>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-nav-toggle"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav aria-label="Main navigation" className="nav-links" data-open={isOpen}>
          {links.map((link) => (
            <Link
              aria-current={pathname === link.href ? "page" : undefined}
              className="nav-link"
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <span className="header-status">
          <span aria-hidden="true" className="status-dot" />
          ALL SYSTEMS NOMINAL
        </span>
      </div>
    </header>
  );
}
