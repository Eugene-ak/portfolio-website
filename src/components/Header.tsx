export default function Header() {
  return (
    <header className="header w-full h-max px-40 py-4 bg-[#1B1A55] text-white flex flex-row items-center justify-between border-b-2">
      <img src="/logo1.jpg" alt="logo" className="rounded-full w-16" />
      <nav className="navbar text-[1.2rem]">
        <ul className="nav-links flex flex-row items-center gap-16">
          <li>
            <span>&lt; </span>
            <a href="/">Home</a>
            <span> /&gt;</span>
          </li>
          <li>
            <span>&lt; </span>
            <a href="about-section">About</a>
            <span> /&gt;</span>
          </li>
          <li>
            <span>&lt; </span>
            <a href="skills-section">Skills</a>
            <span> /&gt;</span>
          </li>
          <li>
            <span>&lt; </span>
            <a href="contact-section">Contact</a>
            <span> /&gt;</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
