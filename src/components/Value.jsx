import React from "react";
import Image from "next/image";

// selector takes in a string that maps to a dictionary entry
// the dictionary can be found in src/data/cards
// each entry contains the backgroudn color, the text, the title, and img path
const Value = ({ title, text, image, color }) => {
  // const base_class = `rounded-lg font-nunito flex flex-col items-center max-w-[380px] mx-auto p-4 gap-3 bg-[${color}]`;
  // const base_class = `rounded-lg text-white font-nunito flex flex-col items-center max-w-[380px] mx-auto p-4 gap-3 bg-[#051d40]`;

  return (
    <div
      className={`rounded-lg text-white font-nunito ${color}
                    flex flex-col items-center
                    w-80 h-88 mx-10 p-4 gap-3`}
    >
      <Image src={image} />
      <div className="font-extrabold text-4xl text-center tracking-wide">
        {title}
      </div>
      <div className="cont-semibold text-2xl text-center w-full mb-4">
        {text}
      </div>
    </div>
  );
};

export default Value;
