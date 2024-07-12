import React from "react";
import Image from "next/image";
import { Placements } from "@/data/placement";

const Placement = () => {
  return (
    <div>
      <div class="flex justify-center">
        <div class="h-1 border-0 bg-black w-1/12 rounded-full mb-3"></div>
      </div>
      <div className="text-3xl h-1/5 flex justify-center font-nunito">
        Our Placements
      </div>
      <div className="text-2xl flex justify-center mb-9 font-nunito italic">
        Check out where we work
      </div>

      <div className="grid grid-cols-3 justify-items-center items-center justify-center gap-4">
        {Placements.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center overflow-hidden"
          >
            <Image
              className="size-3/4 rounded-xl"
              src={item.image}
              alt="Company"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placement;
