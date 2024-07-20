"use client";
import React, { useState } from "react";
import Title from "./Title";

const Filter = ({ filters, onChange, title }) => {
  const [selectedFilter, setSelectedFilter] = useState("calendar");
  const handleClick = (filter) => {
    setSelectedFilter(filter);
    onChange(filter);
  };
  return (
    <div className="ml-10">
      <Title title={title} />
      <div className="flex space-x-4 mb-5 mt-4">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`w-48 px-6 py-1.5 rounded-full font-nunito ${
              selectedFilter === filter
                ? "bg-ais-blue-100 text-white"
                : "border-2 border-ais-blue-100 text-ais-blue-100"
            }`}
            onClick={() => handleClick(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
