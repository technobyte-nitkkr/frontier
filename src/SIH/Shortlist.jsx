import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "./styles";
import { SectionWrapper } from "./hoc";
import { textVariant } from "./utils/motion";

const Shortlist = () => {
  const teams = [
    "#AgileAvengers",
    "404 Competition Not Found",
    "Aero aces ",
    "AgriDoctors",
    "AI innovators ",
    "automators",
    "Autominds ",
    "Aventura",
    "Beluga inc.",
    "Berozgaar",
    "Code Karma",
    "CODE SMASHERS",
    "Cors Hunter",
    "Data Deviants",
    "DragonFly",
    "Glitch Mobs ",
    "GodsTeam",
    "HackElite",
    "Hexagon",
    "Infinity ",
    "InSomniacs",
    "Light Wave",
    "Musketeers",
    "NEXTECH",
    "PassionOfGold",
    "PEAKYS",
    "PotterHeads",
    "SecureBytes",
    "Shinigami",
    "Smooth operatorrr",
    "Stardust",
    "Team Bond",
    "Team SwarTraas",
    "team2",
    "Tech titans",
    "TensorTribe",
    "The Ctrl Freaks ",
    "Third Eye",
    "Traffixers",
    "ZeroDay_Attackers"]
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Top 40
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Shortlisted Teams
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap flex-row justify-around'>
        {teams.map((team, index) => (
          <div key={`team-${index}`} className='flex justify-center items-center text-black bg-white hover:bg-green-200 w-[250px] h-14 m-2 text-sm cursor-pointer rounded-md font-bold tracking-wider'>
            {team}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Shortlist, "work");
