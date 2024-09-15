"use client";
import React from "react";
import Value from "./Value";
import Title from "../Title";
import { VALUES } from "@/data/values";
import { motion } from "framer-motion";

const animation = {
  start: {
    opacity: 0,
    y: 40,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Values = () => {
  return (
    <motion.div
      initial="start"
      whileInView="end"
      variants={animation}
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col items-center w-full gap-10 font-nunito"
    >
      <Title title={"OUR VALUES"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-5 w-full">
        {VALUES.map((item, index) => (
          <motion.div
            key={index}
            className={"flex flex-col items-center p-4 ${item.color}"}
            initial="start"
            whileInView="end"
            variants={animation}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Value
              title={item.title}
              text={item.text}
              image={item.img}
              color={item.color}
              key={index}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Values;
