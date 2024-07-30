import React from "react";
import Cat from "@/public/cat_placeholder.svg";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Card from "./BoardCard";
import { VALUES } from "@/data/board";

const Board = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10">
      {VALUES.map((item, index) => (
        <Card
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

export default Board;
