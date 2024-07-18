import React from "react";
import Cat from "@/public/cat_placeholder.svg";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Board = () => {
  return (
    <div className="bg-green-500 w-1/6 rounded-xl border border-black">
      <Image src={Cat} alt="cat" />
      <div className="flex flex-col items-center justify-center">
        <div>Justin Lamy</div>
        <div>President</div>
      </div>
      <div className="flex flex-row justify-center gap-2">
        <IoMdMail />
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default Board;
