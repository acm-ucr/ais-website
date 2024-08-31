import React from "react";
import Image from "next/image";

const Offers = ({ image, title, text }) => {
  return (
    <div
      className={`flex flex-col items-center w-96 h-full mx-5 p-2 gap-3 rounded-2xl text-ais-blue-100 font-nunito`}
    >
      <Image
        src={image}
        className="mt-2 rounded-2xl object-cover h-56"
        alt="offer"
      />
      <div className="font-bold text-2xl text-center tracking-wide whitespace-nowrap mt-5">
        {title}
      </div>
      <div className="cont-semibold text-base text-center w-full -mt-2">
        {text}
      </div>
    </div>
  );
};

export default Offers;
