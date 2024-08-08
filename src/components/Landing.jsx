"use client";
import React from "react";
import Image from "next/image";
import wave from "@/public/wave.svg";
import wave2 from "@/public/wave2.svg";
import AIS from "@/public/AIS.svg";
import Button from "./Button";

const Landing = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-ais-blue-100 via-ais-blue-200 to-ais-blue-300 overflow-hidden">
      <Image
        src={wave}
        alt="Wave 1"
        className="object-cover w-full h-full absolute right-[0%] bottom-[0%] rotate-100"
      />

      <Image
        src={wave2}
        alt="Wave 2"
        className="object-cover w-full h-full absolute right-[10%] bottom-[20%] rotate-12 scale-125"
      />

      <div className="absolute inset-0 flex flex-col justify-end items-center md:items-end md:pb-[6%] md:pr-[5%] text-white p-4">
        <div className="flex flex-col items-center md:items-start gap-3 max-w-xl w-full whitespace-nowrap">
          <h1 className="text-xl md:text-4xl text-center md:text-left md:ml-[-80px] lg:ml-[-15px] xl:ml-4 mb-4 z-10">
            EMPOWERING FUTURE INNOVATORS
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start z-10">
            <Image
              src={AIS}
              alt="AIS Logo"
              className="scale-125 md:scale-150 mb-4 md:mb-0"
            />
            <div className="flex flex-col items-center md:items-start m-4 md:m-8 text-xl md:text-3xl gap-1">
              <h2 className="font-light">ASSOCIATION FOR</h2>
              <h3 className="font-semibold">INFORMATION SYSTEMS</h3>
              <h4>AT UCR</h4>
            </div>
          </div>

          <div className="flex mt-4 gap-4 md:gap-6 md:ml-8 z-10">
            <Button
              text={"JOIN US"}
              link={"https://youtu.be/ze-POGS94-k?si=GTi-7sfaI0m1z_YT"}
              target={"_blank"}
            />
            <Button text={"LEARN MORE"} link={"about"} target={null} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
