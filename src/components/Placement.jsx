import React from "react";
import Image from "next/image";
import Title from "./Title";
import { Placements } from "@/data/placement";

const Placement = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="h-1 border-0 bg-black w-1/12 rounded-full mb-3" />

      <div className="text-3xl h-1/5 flex justify-center font-nunito">
        <Title title={"Our Placements"} />
      </div>
      <div className="text-2xl flex justify-center mb-9 font-nunito italic">
        Check out where we work
      </div>

      <div className="grid grid-cols-3 w-9/12 items-center justify-center gap-4">
        {Placements.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center overflow-hidden mb-10"
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
