import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ICONS } from "@/data/icons";
import AIS from "@/public/AIS.svg";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 bg-ais-blue-100 text-white py-7">
      <div className="flex items-center justify-center">
        <Image
          src={AIS}
          alt="AIS Logo"
          className=" scale-100 md:scale-125 -mr-5 md:-mr-2"
        />
        <div className="flex flex-col font-light  text-lg md:text-3xl mt-2">
          ASSOCIATION OF
          <p className="font-semibold white">INFORMATIONS SYSTEMS</p>
          <p>AT UCR</p>
        </div>
      </div>
      <div className="mt-0 md:mt-2 text-2xl text-center">
        Reach out to us today: <br />
        <Link
          href="mailto:aisatucr@gmail.com"
          className="text-white italic text-xl"
        >
          aisatucr@gmail.com
        </Link>
      </div>
      <div className="flex justify-center gap-x-2">
        {ICONS.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target={"_blank"}
            className="text-white text-5xl md:text-7xl hover:text-gray-300 transition-colors duration-300"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
