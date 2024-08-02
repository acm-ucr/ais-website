import React from "react";
import Board from "./Board";
import { VALUES } from "@/data/board";
const Boards = () => {
  return (
    <div className="flex flex-col gap-y-14">
      <div className="flex flex-col md:flex-row items-center md:justify-around gap-14 md:gap-0">
        {VALUES.slice(0, 2).map((item, index) => (
          <Board
            image={item.img}
            name={item.name}
            position={item.pos}
            email={item.email}
            linkedin={item.linkedin}
            key={index}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-14">
        {VALUES.slice(2).map((item, index) => (
          <Board
            key={index}
            image={item.img}
            name={item.name}
            position={item.pos}
            email={item.email}
            linkedin={item.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Boards;
