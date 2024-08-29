"use client";
import { useState } from "react";
import Calendar from "./calendar/Calendar";
import Events from "./Events";
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
        filters={EVENTS}
        onChange={handleFilterChange}
        title={"EVENT OVERVIEW"}
      />
      {component === "calendar" && <Calendar />}
      {component === "upcoming" && <Events type="upcoming" />}
      {component === "past" && <Events type="past" />}
    </div>
  );
};

export default Wrapped;
