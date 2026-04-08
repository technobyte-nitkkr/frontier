"use client";
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Shortlist from "./Shortlist";

export default function SIH() {
  return (
    <div className="bg-black text-white selection:bg-brand-primary/30">
      <Hero />
      <About />
      <Experience />
      <Shortlist />
      
      <div className="section-wrapper">
        <div className="main-container">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                    src={"/assets/SIH/flow.png"} 
                    alt="sih flow" 
                    className="w-full h-auto" 
                />
            </div>
        </div>
      </div>
    </div>
  );
}
