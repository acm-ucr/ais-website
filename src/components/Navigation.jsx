"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/AIS.svg";
import { items } from "@/data/nav";

const Navigation = () => {
  return (
    <div className="h-36 bg-ais-blue w-full flex justify-between items-center text-xl px-5">
      <Link href="/" className="flex items-center pl-20 space-x-1">
        <Image alt="logo" src={logo} className="h-auto w-36" />
        <div className="text-white text-2xl whitespace-nowrap">
          <span className="font-normal">ASSOCIATION FOR</span> <br />
          <span className="font-bold">INFORMATION SYSTEMS</span> <br />
          <span className="font-normal">AT UCR</span>
        </div>
      </Link>
      <div className="space-x-6 md:pl-0 pl-4 pr-20 text-white items-center flex flex-row whitespace-nowrap gap-4 sm:w-3/5 w-2/5 justify-around">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="hover:opacity-60 duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
