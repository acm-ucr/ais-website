import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Alumni = ({ image, name, position, linkedin, target = "_blank" }) => {
  return (
    <div className="w-80  rounded-2xl border border-black flex flex-col items-center justify-center text-center gap-2 text-ais-blue-100">
      <Image
        src={image}
        className="rounded-2xl object-cover h-80 p-0.5"
        alt={name}
      />
      <div className="font-bold text-2xl"> {name} </div>
      <div className="font-semibold text-lg"> {position} </div>
      <div className="flex justify-center gap-5 mt-auto mb-3">
        <Link href={linkedin} target={target}>
          <FaLinkedinIn className="scale-150" />
        </Link>
      </div>
    </div>
  );
};

export default Alumni;
