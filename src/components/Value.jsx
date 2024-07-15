import React from "react";
import Image from "next/image";

const Value = ({ title, text, image, color }) => {
  return (
    <div
      className={`flex flex-col items-center w-80 h-88 mx-10 p-3 gap-4 rounded-lg text-white font-nunito ${color}`}
    >
      <Image src={image} alt="icon" className="mt-2" />
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
