"use client";
import { useState } from "react";
import Calendar from "./Calendar";
import Upcoming from "./Upcoming";
import Past from "./Past";
import Filter from "../Filter";
import { EVENTS } from "@/data/filters";

const Wrapped = () => {
  const [component, setComponent] = useState("calendar");
  const handleFilterChange = (component) => {
    setComponent(component);
  };
  return (
    <div>
      <Filter
        className="ml-36"
        filters={EVENTS}
        onChange={handleFilterChange}
        title={"EVENT OVERVIEW"}
      />
      {component === "calendar" && <Calendar />}
      {component === "upcoming" && <Upcoming />}
      {component === "past" && <Past />}
    </div>
  );
};

export default Wrapped;
