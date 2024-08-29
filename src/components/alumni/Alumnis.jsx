import React from "react";
import Alumni from "./Alumni";
import { ALUMNI } from "@/data/board";

const Alumnis = () => {
  return (
    <div className="flex flex-col gap-y-14">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-14">
        {ALUMNI.map((alumni, index) => (
          <Alumni
            key={index}
            image={alumni.image}
            name={alumni.name}
            position={alumni.position}
            linkedin={alumni.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Alumnis;
