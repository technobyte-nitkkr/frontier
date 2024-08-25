import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "./styles";

import { SectionWrapper } from "./hoc";
import { textVariant } from "./utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
     
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
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
      date: "25th-27th August",
      points: [
        "Participants must register for the hackathon.",
        "Ensure all required details are provided.",
        "Registration closes on the 27th of August.",
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
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
         What goes when?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          SCHEDULE.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {timeline.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
