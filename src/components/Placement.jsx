"use client";
import React from "react";
import Image from "next/image";
import { Placements } from "@/data/placement";
import { motion } from "framer-motion";

const Placement = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="h-1 bg-black w-1/12 rounded-full mb-3" />

      <h2 className="text-3xl font-nunito mb-3">Our Placements</h2>
      <p className="text-2xl italic font-nunito mb-9">
        Check out where we work
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Placements.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              className="rounded-xl"
              src={item.image}
              alt="Company"
              width={200}
              height={200}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Placement;
