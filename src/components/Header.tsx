export default function Header() {
  return (
    <header className="header w-screen bg-[blue] h-max px-[10rem] py-4 flex flex-row items-center justify-between">
      <h1 className="logo font-bold text-4xl text-white">Logo</h1>
      <nav className="navbar text-white text-[1.2rem]">
        <ul className="nav-links flex flex-row items-center gap-16">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
