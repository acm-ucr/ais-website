import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
  const baseStyle =
    "rounded-full text-[2rem] font-plain text-center inline-block";
  const joinUsStyle =
    "border-[3px] border-white bg-[#030E68] text-white py-[10px] px-[30px] ";
  const learnMoreStyle =
    "border-[3px] border-[#021260] bg-white text-[#021260] py-[10px] px-[30px]";

  return (
    <button
      className={`${baseStyle} ${
        text === "JOIN US" ? joinUsStyle : learnMoreStyle
      }`}
    >
      <Link href={link} className="inline-block w-full h-full">
        {text}
      </Link>
    </button>
  );
};

export default Button;
