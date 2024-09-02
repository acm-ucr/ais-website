"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Title from "./Title";
import { Placements } from "@/data/placement";

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

const Placement = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="h-1 border-0 bg-black w-1/12 rounded-full my-3" />
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
      >
        <div className="text-3xl h-1/5 flex justify-center font-nunito">
          <Title title={"Our Placements"} />
        </div>
        <div className="text-2xl flex justify-center mb-9 font-nunito italic">
          Check out where we work
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-2 md:grid-cols-3 w-full md:w-10/12 lg:w-9/12 items-center justify-center gap-4"
      >
        {Placements.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center overflow-hidden mb-10"
            variants={cardVariants}
          >
            <Image
              className="size-3/4 md:size-full lg:size-3/4 rounded-xl"
              src={item.image}
              alt="Company"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Placement;
