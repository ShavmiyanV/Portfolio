import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { div } from "motion/react-client";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },

  {
    skill: "CSS",
    icon: FaCss3Alt,
  },

  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },

  {
    skill: "Python",
    icon: FaPython,
  },

  {
    skill: "ReactJS",
    icon: RiReactjsFill,
  },

  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },

  {
    skill: "MongoDB",
    icon: DiMongodb,
  },

  {
    skill: "Figma",
    icon: FaFigma,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
