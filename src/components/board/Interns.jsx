import React from "react";
import Intern from "./Intern";
import { VARIABLES } from "@/data/board";

const Interns = () => {
  return (
    <div className="flex flex-col gap-y-14">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-14">
        {VARIABLES.slice(0, 6).map((intern, index) => (
          <Intern
            key={index}
            name={intern.name}
            title={intern.title}
            linkedin={intern.linkedin}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {VARIABLES.slice(6).map((intern, index) => (
          <Intern
            key={index}
            name={intern.name}
            title={intern.title}
            linkedin={intern.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Interns;
