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

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute w-full flex justify-between items-start md:items-center text-2x1 px-1 z-20 md:px-5">
      <Link href="/" className="flex items-center pl-1 md:pl-20">
        <Image alt="logo" src={logo} className="w-14 lg:w-36 md:h-auto" />
        <div className="flex-col text-white text-x1 md:text-2xl whitespace-nowrap">
          <item className="font-normal">ASSOCIATION FOR</item> <br />
          <item className="font-bold">INFORMATION SYSTEMS</item> <br />
          <item className="font-normal">AT UCR</item>
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
      {/* mobile menu */}
      <div
        className={`fixed ${
          nav
            ? "transition transform ease-out duration-500 translate-y-[68px] opacity-100"
            : "hidden transition duration-500 ease-in transform -translate-y-24 opacity-0"
        } md:hidden flex flex-col items-center justify-evenly w-full duration-500 bg-art-purple-100 top-0 left-100 right-0 -z-10`}
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
      <div onClick={handleNav}>
        <FaBars
          className={`text-3xl flex right-0 md:hidden ${
            nav ? "text-white" : "text-white"
          } hover:cursor-pointer hover:text-ais-gray justify-self-end`}
        />
      </div>
    </div>
  );
};

export default Navigation;
