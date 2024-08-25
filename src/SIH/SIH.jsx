import "./sih.css";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import flow from "/assets/SIH/flow.png";

export default function SIH() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <img src={flow} alt="sih" className="w-full h-auto" />
    </>

  );
}
