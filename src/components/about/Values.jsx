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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Values = () => {
  return (
    <div className="flex flex-col items-center w-full gap-10 font-nunito">
      <Title title={"OUR VALUES"} />
      <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-5 xl:gap-10 w-full">
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
    </div>
  );
};

export default Values;
