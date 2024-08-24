"use client";
import React from "react";
import Image from "next/image";
import Title from "./Title";
import { Placements } from "@/data/placement";
import { motion } from "framer-motion";

const Placement = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="h-1 bg-black w-1/12 rounded-full mb-3" />

      <div className="text-3xl h-1/5 flex justify-center font-nunito">
        <Title title={"Our Placements"} />
      </div>
      <p className="text-2xl italic font-nunito mb-9">
        Check out where we work
      </p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 w-full md:w-10/12 lg:w-9/12 items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Placements.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center overflow-hidden mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
