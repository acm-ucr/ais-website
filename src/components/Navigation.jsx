"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/AIS.svg";
import { items } from "@/data/nav";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState("");

  return (
    <div className="absolute w-full flex justify-between items-center text-2x1 z-20 xl:px-5 md:py-4">
      <Link href="/" className="flex items-center pl-1 lg:pl-20">
        <Image alt="logo" src={logo} className="w-24 lg:w-36 md:h-auto" />
        <div className="flex-col text-white text-x1 md:text-2xl whitespace-nowrap">
          <p className="font-normal">ASSOCIATION FOR</p>
          <p className="font-bold">INFORMATION SYSTEMS</p>
          <p className="font-normal">AT UCR</p>
        </div>
      </Link>
      <div className="hidden md:grid grid-cols-3 lg:flex justify-end w-full md:gap-4 ml-28 lg:gap-8 mr-0 lg:mr-12 text-white rounded-xl bg-transparent">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="hover:opacity-60 text-xl lg:text-2xl duration-300 text-center"
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* mobile menu */}
      <div
        className={`fixed ${
          nav
            ? "transition transform ease-out duration-500 translate-y-24 opacity-100"
            : "hidden transition duration-500 ease-in transform -translate-y-24 opacity-0"
        } md:hidden flex flex-col items-center justify-evenly bg-ais-gray/5 w-full duration-300 top-0 left-100 right-0 -z-10`}
      >
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
              handleNav();
            }}
            className={`hover:text-ais-gray duration-300 border-solid font-semibold py-2 mx-2 ${
              selected === item.name ? "text-ais-gray" : "text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div onClick={() => setNav(!nav)}>
        <FaBars
          className={`text-3xl flex right-0 md:hidden ${
            nav ? "text-white" : "text-white"
          } hover:cursor-pointer hover:text-ais-gray justify-self-end mr-4`}
        />
      </div>
    </div>
  );
};

export default Navigation;
