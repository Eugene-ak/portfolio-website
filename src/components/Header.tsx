import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { HashLink } from "react-router-hash-link";

export default function Header() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navRef: any = useRef();

  function showMenu() {
    navRef.current.classList.toggle("hidden");
  }

  return (
    <header className="header fixed top-0 w-full h-max px-8 lg:px-40 py-4 bg-[#1B1A55] text-white flex flex-row items-center justify-between border-b-2">
      <img src="/logo1.jpg" alt="logo" className="rounded-full w-16" />
      <nav className="navbar text-[1.2rem] hidden md:flex">
        <ul className="nav-links flex flex-row items-center gap-8">
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

      <nav ref={navRef} className="mobile-navbar text-[1.2rem] hidden">
        <ul className="nav-links flex flex-row items-center gap-8">
          <li>
            <span>&lt; </span>
            <HashLink to="#hero-section" onClick={showMenu} smooth>
              Home
            </HashLink>
            <span> /&gt;</span>
          </li>
          <li>
            <span>&lt; </span>
            <HashLink to="#about-section" onClick={showMenu} smooth>
              About
            </HashLink>
            <span> /&gt;</span>
          </li>
          <li>
            <span>&lt; </span>
            <HashLink to="#skills-section" onClick={showMenu} smooth>
              Skills
            </HashLink>
            <span> /&gt;</span>
          </li>
          <li>
            <span>&lt; </span>
            <HashLink to="#contact-section" onClick={showMenu} smooth>
              Contact
            </HashLink>
            <span> /&gt;</span>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon icon={faBars} onClick={showMenu} className="w-8 h-8 md:hidden" />
    </header>
  );
}
