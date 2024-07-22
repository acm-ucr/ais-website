import React from "react";
import Image from "next/image";

const OfferCard = ({ image, title, text }) => {
  return (
    <div
      className={`flex flex-col items-center w-80 h-auto mx-5 p-2 gap-3 rounded-2xl text-ais-blue-100 font-nunito`}
    >
      <div className="h-56 w-full relative">
        <Image
          src={image}
          layout="fill"
          className="mt-2 rounded-2xl object-cover"
          alt="offer"
        />
      </div>
      <div className="font-bold text-2xl text-center tracking-wide whitespace-nowrap mt-5">
        {title}
      </div>
      <div className="cont-semibold text-l text-center w-full -mt-2">
        {text}
      </div>
    </div>
  );
};

export default OfferCard;
