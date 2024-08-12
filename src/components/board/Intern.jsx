import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Intern = ({ name, title, linkedin, target = "_blank" }) => {
  return (
    <div className="w-80 rounded-2xl border border-black flex flex-col items-center gap-2 text-ais-blue-100 p-3">
      <div className="font-bold text-2xl"> {name}</div>
      <div className="font-semibold text-lg">{title}</div>
      <div className="flex justify-center gap-5">
        <Link href={linkedin} target={target}>
          <FaLinkedinIn className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Intern;
