"use client";
import React from "react";
import Board from "./Board";
import { VALUES } from "@/data/board";
import { motion } from "framer-motion";
const Boards = () => {
  const containerVariants = {
    start: {
      opacity: 0,
      y: 30,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const animations = {
    start: {
      opacity: 0,
      y: 30,
    },
    end: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-y-14 my-10"
      variants={containerVariants}
      initial="start"
      whileInView="end"
      transition={{ duration: 0.1 }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center md:justify-around gap-14 md:gap-0"
        variants={containerVariants}
      >
        {VALUES.slice(0, 2).map((item, index) => (
          <motion.div key={index} variants={animations}>
            <Board
              image={item.img}
              name={item.name}
              position={item.pos}
              email={item.email}
              linkedin={item.linkedin}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-14"
        variants={containerVariants}
      >
        {VALUES.slice(2).map((item, index) => (
          <motion.div key={index} variants={animations}>
            <Board
              image={item.img}
              name={item.name}
              position={item.pos}
              email={item.email}
              linkedin={item.linkedin}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Boards;
