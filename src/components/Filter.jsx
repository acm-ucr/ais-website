"use client";
import React, { useState } from "react";
import Title from "./Title";
import { motion } from "framer-motion";

const containerVariants = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.7,
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

const Filter = ({ filters, onChange, title, className }) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const handleClick = (filter) => {
    setSelectedFilter(filter);
    onChange(filter);
  };

  return (
    <div className="m-0 md:ml-6 text-center md:text-left">
      <Title title={title} />
      <motion.div
        className="flex space-x-4 mb-5 mt-4"
        variants={containerVariants}
        initial="start"
        whileInView="end"
        transition={{ duration: 0.8 }}
      >
        {filters.map((filter) => (
          <motion.button
            variants={animations}
            initial="start"
            whileInView="end"
            transition={{ duration: 0.8 }}
            key={filter}
            className={`w-48 px-6 py-1.5 rounded-full font-nunito ${
              selectedFilter === filter
                ? "bg-ais-blue-100 text-white"
                : "border-2 border-ais-blue-100 text-ais-blue-100"
            }`}
            onClick={() => handleClick(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Filter;
