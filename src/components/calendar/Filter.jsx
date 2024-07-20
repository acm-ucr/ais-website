"use client";
import React, { useState } from "react";
import Calendar from "./Calendar";
import Upcoming from "./Upcoming";
import Past from "./Past";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState("calendar");

  return (
    <div className="ml-10">
      <h1 className="text-2xl text-ais-blue-100 font-nunito mb-3">
        EVENT OVERVIEW
      </h1>
      <div className="flex space-x-4 mb-5">
        <button
          className={`w-48 px-6 py-1 rounded-full font-nunito ${
            selectedFilter === "calendar"
              ? "bg-ais-blue-100 text-white"
              : "border-2 border-navy text-ais-blue-100"
          }`}
          onClick={() => setSelectedFilter("calendar")}
        >
          Calendar
        </button>
        <button
          className={`w-48 px-6 py-1 rounded-full font-nunito ${
            selectedFilter === "upcoming"
              ? "bg-ais-blue-100 text-white"
              : "border-2 border-ais-blue-100 text-ais-blue-100"
          }`}
          onClick={() => setSelectedFilter("upcoming")}
        >
          Upcoming Events
        </button>
        <button
          className={`w-48 px-6 py-1 rounded-full font-nunito ${
            selectedFilter === "past"
              ? "bg-ais-blue-100 text-white"
              : "border-2 border-ais-blue-100 text-ais-blue-100"
          }`}
          onClick={() => setSelectedFilter("past")}
        >
          Event Archive
        </button>
      </div>
      <div>
        {selectedFilter === "calendar" && <Calendar />}
        {selectedFilter === "upcoming" && <Upcoming />}
        {selectedFilter === "past" && <Past />}
      </div>
    </div>
  );
};

export default Filter;
