import React from "react";
import Link from "next/link";

const Button = ({ text, link, target }) => {
  return (
    <button
      className={`rounded-full text-2xl font-plain text-center inline-block
      ${
        text === "JOIN US"
          ? "border-2 border-white bg-transparent text-white py-2 px-8 "
          : "border-2 border-ais-blue-100 bg-white text-ais-blue-100 py-2 px-8"
      }`}
    >
      <Link href={link} target={target} className="inline-block w-full h-full">
        {text}
      </Link>
    </button>
  );
};

export default Button;
