"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./utils/motion";

const Hero = () => {
  return (
    <section 
      style={{ marginTop: '200px' }} 
      className="relative w-full pt-12 pb-16 md:pb-24 overflow-hidden" 
      id="sih-hero"
    >
      <div className="main-container relative z-10 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl flex flex-col gap-12 md:gap-24">
          <motion.div
             // @ts-ignore
             variants={fadeIn("down", "spring", 0.1, 1)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
          >
            <h1 className="text-white font-black lg:text-[80px] md:text-[64px] sm:text-[52px] text-[40px] leading-[1.1]">
              Smart India Hackathon <span className="text-brand-primary">2024</span>
            </h1>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-lg md:text-xl font-bold font-jetbrains">Register:</span>
              <span className="text-red-500/60 text-lg md:text-xl font-bold cursor-not-allowed">
                Google Form
              </span>
            </div>

            <div className="flex items-center gap-4 group hover:border-green-500/30 transition-all">
              <span className="text-slate-400 text-lg md:text-xl font-bold font-jetbrains flex items-center gap-2">
                Results <sup className="text-red-500 animate-pulse font-sans lowercase text-xs">new</sup>:
              </span>
              <a 
                href="https://www.instagram.com/technobyte_nitkkr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-500 text-lg md:text-xl font-bold hover:text-green-400 underline decoration-2 underline-offset-4"
              >
                Check Out &#8599;
              </a>
            </div>
          </div>

          <motion.div 
            // @ts-ignore
            variants={fadeIn("up", "spring", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-12 md:p-24 pt-24 md:pt-32 relative group p-4"
          >
            <div className="relative mb-24 px-8 md:px-0">
                <h2 className="text-white text-5xl md:text-6xl font-bold pb-6">
                Why participate?
                </h2>
                <div className="mt-12 w-32 h-3 bg-brand-primary rounded-full group-hover:w-48 transition-all duration-700 shadow-[0_0_20px_rgba(145,94,255,0.5)]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 px-8 md:px-0">
              {[
                { label: "Solve Real-World Challenges", desc: "Make an impact with your innovative solutions. 🌍" },
                { label: "Represent Your College", desc: "Showcase your talent and school spirit. 🎓" },
                { label: "Win Big", desc: "Connect with visionaries and industry leaders. 🤝" },
                { label: "Network with Innovators", desc: "Each problem statement offers a reward of 1 lakh INR. 🏆💰" },
                { label: "Enjoy free meal", desc: "Free meals will be provided during the Grand Hackathon on the 31st August 🍕" }
              ].map((item, index) => (
                <div key={index} className="group/item">
                  <p className="text-brand-secondary font-bold text-xl md:text-2xl mb-3 flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-brand-primary group-hover/item:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(145,94,255,0.5)]"></span>
                    {item.label}
                  </p>
                  <p className="text-slate-400 leading-relaxed text-base md:text-lg group-hover/item:text-slate-200 transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
