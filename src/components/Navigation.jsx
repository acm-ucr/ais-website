"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/AIS.svg";
import { items } from "@/data/nav";

const Navigation = () => {
  return (
    <div className="h-36 bg-ais-blue-100 w-full flex justify-between items-center text-2xl px-5">
      <Link href="/" className="flex items-center pl-20 space-x-1">
        <Image alt="logo" src={logo} className="h-auto w-36" />
        <div className="text-white text-2xl whitespace-nowrap">
          <span className="font-normal">ASSOCIATION FOR</span> <br />
          <span className="font-bold">INFORMATION SYSTEMS</span> <br />
          <span className="font-normal">AT UCR</span>
        </div>
      </Link>
      <div className="hidden md:flex justify-end w-full lg:gap-4 lg:space-x-5 mr-12 text-white">
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
