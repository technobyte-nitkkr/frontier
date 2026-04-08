"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "./utils/motion";

const Shortlist = () => {
  const teams = [
    "#AgileAvengers", "404 Competition Not Found", "Aero aces ", "AgriDoctors", "AI innovators ", 
    "automators", "Autominds ", "Aventura", "Beluga inc.", "Berozgaar", "Code Karma", 
    "CODE SMASHERS", "Cors Hunter", "Data Deviants", "DragonFly", "Glitch Mobs ", 
    "GodsTeam", "HackElite", "Hexagon", "Infinity ", "InSomniacs", "Light Wave", 
    "Musketeers", "NEXTECH", "PassionOfGold", "PEAKYS", "PotterHeads", "SecureBytes", 
    "Shinigami", "Smooth operatorrr", "Stardust", "Team Bond", "Team SwarTraas", 
    "team2", "Tech titans", "TensorTribe", "The Ctrl Freaks ", "Third Eye", "Traffixers", "ZeroDay_Attackers"
  ];

  return (
    <section className="section-wrapper" id="shortlist">
      <div className="main-container">
        <motion.div 
            // @ts-ignore
            variants={textVariant()}
            className="flex flex-col items-center mb-16 text-center"
        >
          <p className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-2">
            Top 40
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] leading-tight">
            Shortlisted Teams
          </h2>
          <div className="w-24 h-1.5 bg-brand-primary rounded-full mt-4"></div>
        </motion.div>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {teams.map((team, index) => (
            <motion.div 
              key={`team-${index}`} 
              whileHover={{ scale: 1.02 }}
              className='flex justify-center items-center text-white bg-white/5 border border-white/10 hover:border-brand-primary/40 hover:bg-white/10 px-4 h-16 text-sm text-center cursor-pointer rounded-xl font-bold tracking-tight transition-all shadow-lg backdrop-blur-sm'
            >
              <span className="truncate">{team}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shortlist;
