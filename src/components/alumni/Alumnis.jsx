"use client";
import React from "react";
import Alumni from "./Alumni";
import { ALUMNI } from "@/data/board";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Alumnis = () => {
  return (
    <div className="flex flex-col gap-y-14">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-14"
      >
        {ALUMNI.map((alumni, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex justify-center items-center overflow-hidden mb-10"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Alumni
              image={alumni.image}
              name={alumni.name}
              position={alumni.position}
              linkedin={alumni.linkedin}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Alumnis;
