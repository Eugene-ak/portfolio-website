import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <header className="header fixed top-0 w-full h-max px-40 py-4 bg-[#1B1A55] text-white flex flex-row items-center justify-between border-b-2">
      <img src="/logo1.jpg" alt="logo" className="rounded-full w-16" />
      <nav className="navbar text-[1.2rem]">
        <ul className="nav-links flex flex-row items-center gap-16">
          <li>
            <span>&lt; </span>
            <HashLink to="#hero-section" smooth>
              Home
            </HashLink>
            <span> /&gt;</span>
          </li>
          <li>
            <span>&lt; </span>
            <HashLink to="#about-section" smooth>
              About
            </HashLink>
            <span> /&gt;</span>
          </li>
          <li>
            <span>&lt; </span>
            <HashLink to="#skills-section" smooth>
              Skills
            </HashLink>
            <span> /&gt;</span>
          </li>
          <li>
            <span>&lt; </span>
            <HashLink to="#contact-section" smooth>
              Contact
            </HashLink>
            <span> /&gt;</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
