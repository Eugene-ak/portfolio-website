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
    <section className="hero w-[100%] h-[80vh] py-4 flex flex-row items-center justify-center">
      <div className="w-[40%] hero-text flex flex-col items-start gap-2">
        <h1 className="text-[4rem] font-bold">Hello there</h1>
        <p className="text-[1.8rem]">
          My name is{" "}
          <span className="animate-text text-[#9290C3]">Eugene Amedior</span>{" "}
          and
        </p>
        <p className="text-[1.8rem]">
          I specialize in {" "}
          <span className="animate-text text-[#9290C3]">{TextAnimation()}</span>
        </p>
      </div>
      <img
        src={heroImage}
        alt="heroImage"
        className="w-[25rem] h-[30rem] rounded-3xl hidden md:block"
      />
    </section>
  );
}
