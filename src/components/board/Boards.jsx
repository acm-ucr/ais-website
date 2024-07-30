import React from "react";
import Board from "./Board";
import { VALUES } from "@/data/board";
const Boards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-14">
      {VALUES.map((item, index) => (
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
  );
};

export default Boards;
