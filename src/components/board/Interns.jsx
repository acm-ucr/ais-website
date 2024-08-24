"use client";
import React from "react";
import Intern from "./Intern";
import { VARIABLES } from "@/data/board";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Interns = () => {
  return (
    <motion.div
      className="flex flex-col gap-y-14"
      initial="hidden"
      animate="visible"
      variants={animation}
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-14"
        variants={animation}
      >
        {VARIABLES.slice(0, 6).map((intern, index) => (
          <motion.div key={index} variants={itemAnimation}>
            <Intern
              key={index}
              name={intern.name}
              title={intern.title}
              linkedin={intern.linkedin}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="flex justify-center" variants={animation}>
        {VARIABLES.slice(6).map((intern, index) => (
          <motion.div key={index} variants={itemAnimation}>
            <Intern
              key={index}
              name={intern.name}
              title={intern.title}
              linkedin={intern.linkedin}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Interns;
