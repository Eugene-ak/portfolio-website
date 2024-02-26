export default function Skills() {

  const spanClass: string = "w-[15rem] h-[10rem] m-[1.5rem] border flex items-center justify-center";
  // const spanClass: string = "w-[10rem] h-[10rem] m-[1.5rem] border flex items-center justify-center";

  return (
    <section className="skills-section w-full h-max px-40 py-8 flex flex-col items-center gap-4">
      <h1 className="text-[3rem]">&lt; Skills /&gt;</h1>
      <div className="w-full h-max">
        <ul className="flex flex-row flex-wrap items-start justify-evenly">
          <li className={spanClass}>HTML</li>
          <li className={spanClass}>CSS</li>
          <li className={spanClass}>TAILWIND</li>
          <li className={spanClass}>JAVASCRIPT</li>
          <li className={spanClass}>REACT JS</li>
          <li className={spanClass}>NEXT JS</li>
          <li className={spanClass}>GIT & GITHUB</li>
          <li className={spanClass}>NODE JS</li>
          <li className={spanClass}>MONGO DB</li>
          <li className={spanClass}>SQL</li>
          <li className={spanClass}>PYTHON</li>
        </ul>
      </div>
      {/* <div className="w-[100%] h-max flex flex-row overflow-hidden items-start justify-evenly border">
        <span className={spanClass}>HTML</span>
        <span className={spanClass}>CSS</span>
        <span className={spanClass}>TAILWIND</span>
        <span className={spanClass}>JAVASCRIPT</span>
        <span className={spanClass}>REACT JS</span>
        <span className={spanClass}>NEXT JS</span>
        <span className={spanClass}>GIT & GITHUB</span>
        <span className={spanClass}>NODE JS</span>
        <span className={spanClass}>MONGO DB</span>
        <span className={spanClass}>SQL</span>
        <span className={spanClass}>PYTHON</span>
        <span className={spanClass}>PYTHON</span>
        <span className={spanClass}>PYTHON</span>
        <span className={spanClass}>PYTHON</span>
        <span className={spanClass}>PYTHON</span>
      </div> */}
    </section>
  );
}
