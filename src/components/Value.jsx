import React from "react";
import { values } from "@/data/cards.js";

// selector takes in a string that maps to a dictionary entry
// the dictionary can be found in src/data/cards
// each entry contains the backgroudn color, the text, the title, and img path
const Value = ({ selector }) => {
  const color = values[selector]["color"];
  console.log(color)
  const baseClass = `rounded-lg text-white font-nunito bg-[${color}]
                    flex flex-col items-center
                    max-w-[380px] mx-auto p-4 gap-3`;
  // const base_class = `rounded-lg font-nunito flex flex-col items-center max-w-[380px] mx-auto p-4 gap-3 bg-[${color}]`;
  // const base_class = `rounded-lg text-white font-nunito flex flex-col items-center max-w-[380px] mx-auto p-4 gap-3 bg-[#051d40]`;


  return (
    <div className={baseClass}>
      <img className="" src={values[selector]["img"]} />
      <div className="font-extrabold text-[36px] text-center tracking-wide">
        {values[selector]["title"]}
      </div>
      <div className="cont-semibold text-[24px] text-center max-w-[308px]">
        {values[selector]["text"]}
      </div>
    </div>
  );
};

export default Value;
