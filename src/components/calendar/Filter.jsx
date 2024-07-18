import React from "react";
import Calendar from "./Calendar";
import Upcoming from "./Upcoming";
import Past from "./Past";

const Filter = () => {
  return (
    <div>
      Filter
      <Calendar />
      <Upcoming />
      <Past />
    </div>
  );
};

export default Filter;
