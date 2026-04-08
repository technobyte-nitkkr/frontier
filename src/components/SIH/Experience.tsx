"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "./utils/motion";

const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(255, 255, 255, 0.05)",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "none",
        borderRadius: "1rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.1)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, boxShadow: "none" }}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-brand-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className='text-slate-300 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const timeline = [
    {
      title: "Registration",
      company_name: "Internal Hackathon",
      iconBg: "#383E56",
      date: "25th-28th August",
      points: [
        "Participants must register for the hackathon.",
        "Ensure all required details are provided.",
        "Registration closes on the 28th of August.",
      ],
    },
    {
      title: "First Round",
      company_name: "Internal Hackathon",
      iconBg: "#E6DEDD",
      date: "28th-29th August",
      points: [
        "Initial assessments of the participants.",
        "Teams will work on preliminary projects or tasks.",
        "Shortlisting for the next stage.",
      ],
    },
    {
      title: "First Round Result",
      company_name: "Internal Hackathon",
      iconBg: "#383E56",
      date: "30th August",
      points: [
        "Results of the first round will be announced.",
        "Shortlisted teams will be notified for the hackathon round.",
        "Prepare for the main event.",
      ],
    },
    {
      title: "Hackathon Round",
      company_name: "Internal Hackathon",
      iconBg: "#E6DEDD",
      date: "31st August - 1st September",
      points: [
        "The main hackathon event will take place.",
        "Teams will develop their final projects.",
        "Presentations and judging will follow.",
      ],
    },
  ];
  
  return (
    <section className="section-wrapper scroll-mt-32" id="sih-schedule">
      <div className="main-container">
        <motion.div 
            // @ts-ignore
            variants={textVariant()}
            className="flex flex-col items-center mb-16 text-center"
        >
          <p className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-2">
            What goes when?
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] leading-tight">
            Schedule.
          </h2>
          <div className="w-24 h-1.5 bg-brand-primary rounded-full mt-4"></div>
        </motion.div>

        <div className='mt-10 flex flex-col'>
          {/* @ts-ignore */}
          <VerticalTimeline animate={true} layout="2-columns">
            {timeline.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
