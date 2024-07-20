import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <button
      className={`rounded-full text-[2rem] font-plain text-center inline-block
      ${
        text === "JOIN US"
          ? "border-[3px] border-white bg-transparent text-white py-[10px] px-[30px] "
          : "border-[3px] border-[#021260] bg-white text-[#021260] py-[10px] px-[30px]"
      }`}
    >
      <Link href={link} className="inline-block w-full h-full">
        {text}
      </Link>
    </button>
  );
};

export default Button;
