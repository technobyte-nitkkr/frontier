import "./sih.css";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";

export default function SIH() {
  return (
    <>
    <div className="team">
    <div className="headingGL">Smart India Hackathon 2024</div>
    <div className="sub-team-heading">
      "Innovation, Hard work and Dedication"
    </div>
    <div className="text-white mt-10 text-8xl font-mono animate-pulse">
      coming soon...
    </div>
  </div>
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          
          <Hero />
        </div>
        <About />
        <Experience />
       
       
    
       
      </div>
      </>
      
  );
}
