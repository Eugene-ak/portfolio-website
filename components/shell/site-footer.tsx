import { Activity } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <span>© {new Date().getFullYear()} KINETIC INFRASTRUCTURE</span>
        <span className="footer-note">
          <Activity aria-hidden="true" />
          BUILT FOR RESILIENCE // DESIGNED FOR PEOPLE
        </span>
      </div>
    </footer>
  );
}
