'use client';
import React from "react";
import Image from "next/image";
import Title from "./Title";
import { Placements } from "@/data/placement";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Placement = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="h-1 border-0 bg-black w-1/12 rounded-full mb-3" />

      <div className="text-3xl h-1/5 flex justify-center font-nunito">
        <Title title={"Our Placements"} />
      </div>
      <div className="text-2xl flex justify-center mb-9 font-nunito italic">
        Check out where we work
      </div>

      <motion.div
        className="grid grid-cols-3 w-9/12 items-center justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Placements.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center overflow-hidden mb-10"
            variants={itemVariants}
          >
            <Image
              className="w-3/4 rounded-xl"
              src={item.image}
              alt="Company"
              width={200}  // Set appropriate width
              height={200} // Set appropriate height
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Placement;
