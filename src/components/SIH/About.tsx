"use client";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./utils/motion";
import { themes } from "./themesData";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Tilt 
    options={{
      max: 25,
      scale: 1.05,
      speed: 450,
    }}
    className='w-full xs:w-[250px]'
  >
    <motion.div
      // @ts-ignore
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className='w-full p-[1px] rounded-[20px] bg-gradient-to-b from-[#915EFF] to-[#00DBDE] shadow-xl'
    >
      <div
        className='bg-[#151030] rounded-[20px] py-8 px-6 min-h-[280px] flex justify-evenly items-center flex-col text-center'
      >
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4">
            <img
            src={icon}
            alt={title}
            className='w-12 h-12 object-contain'
            />
        </div>
        <h3 className='text-white text-[18px] font-bold leading-tight'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="section-wrapper relative z-0 scroll-mt-20" id="sih-about">
      <div className="main-container">
        <motion.div 
            // @ts-ignore
            variants={textVariant()} 
            className="flex flex-col items-center mb-16 text-center"
        >
          <p className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-2">Innovation Tracks</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] leading-tight">
            Design Themes
          </h2>
          <div className="w-24 h-1.5 bg-brand-primary rounded-full mt-4"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {themes.map((theme, index) => (
            <ServiceCard
              key={theme.title}
              index={index}
              title={theme.title}
              icon={theme.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
