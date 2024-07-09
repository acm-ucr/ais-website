import React from "react";
import Value from "./Value";

const Values = () => {
  const cards = ["education", "innovation", "community"];
  return (
    <div className="flex gap-10 justify-center">
      {cards.map((x, index) => (
        <Value selector={x} key={index} />
      ))}
    </div>
  );
};

export default Values;
