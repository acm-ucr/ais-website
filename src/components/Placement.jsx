import React from "react";
import Sony from "@/Placements/Sony.svg";
import Image from "next/image";

const Placement = () => {
  return (
    <div>
      <div className="text-2xl h-1/5 flex justify-center">Our Placements</div>
      <div className="bg-green-500 text-xl flex justify-center">
        Check out where we work
      </div>
      <div className="w-[90%] h-full flex flex-col my-3 items-center mx-auto gap-8">
        <div className="grid grid-cols-3 justify-items-center justify-center gap-8">
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
    </div>
  );
};

export default Placement;
