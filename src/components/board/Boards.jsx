"use client";
import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Board from "./Board";
import { BOARD } from "@/data/board";

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
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Boards = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col gap-y-14">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-14"
        >
          {BOARD.map((item, index) => (
            <m.div
              key={index}
              variants={cardVariants}
              className="flex justify-center items-center overflow-hidden mb-10"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Board
                image={item.img}
                name={item.name}
                position={item.position}
                linkedin={item.linkedin}
                email={item.email}
              />
            </m.div>
          ))}
        </m.div>
      </div>
    </LazyMotion>
  );
};

export default Boards;
