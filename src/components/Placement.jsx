import React from "react";
import Sony from "@/Placements/Sony.svg";
import Image from "next/image";

const Placement = () => {
  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col justify-center gap-8">
        <div className="text-xl">Our Placements</div>
        <div className="bg-green-500">Check out where we work</div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 bg-red-500 justify-items-center w-full h-1/3 gap-2 place-self-center mx-14">
        <div className="h-1/2 w-1/2">
          <Image src={Sony} alt="Sony" />
        </div>
        <div className="h-1/2 w-1/2">
          <Image src={Sony} alt="Sony" />
        </div>
        <div className="h-1/2 w-1/2">
          <Image src={Sony} alt="Sony" />
        </div>
        <div className="h-1/2 w-1/2">
          <Image src={Sony} alt="Sony" />
        </div>
        <div className="h-1/2 w-1/2">
          <Image src={Sony} alt="Sony" />
        </div>
        <div className="h-1/2 w-1/2">
          <Image src={Sony} alt="Sony" />
        </div>
      </div>
    </div>
  );
};

export default Placement;
