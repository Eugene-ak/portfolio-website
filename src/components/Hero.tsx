import { useEffect, useState } from "react";
import heroImage from "../assets/heroImage1.jpg";

export default function Hero() {
  const TextAnimation = (): string => {
    const [texts] = useState(["frontend development", "backend development"]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const animationInterval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);

      return () => {
        clearInterval(animationInterval);
      };
    }, [texts]);

    return texts[index];
  };

  return (
    <section
      id="hero-section"
      className="hero w-[100%] h-max px-8 py-8 mt-[8rem] flex flex-col-reverse gap-8 sm:flex-row items-center justify-evenly lg:justify-center"
    >
      <div className="w-full sm:w-[50%] hero-text flex flex-col items-start gap-2">
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold">Hello there</h1>
        <p className="text-[1.2rem] md:text-[1.7rem]">
          My name is{" "}
          <span className="animate-text text-[#9290C3]">Eugene Amedior</span>{" "}
          and I specialize in{" "}
          <span className="animate-text text-[#9290C3]">{TextAnimation()}</span>
        </p>
      </div>
      <img
        src={heroImage}
        alt="heroImage"
        className="w-[20rem] lg:w-[25rem] h-[25rem] lg:h-[30rem] rounded-3xl"
      />
    </section>
  );
}
