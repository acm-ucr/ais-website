"use client";
import React from "react";
import Image from "next/image";
import wave1 from "@/public/wave1.svg";
import wave2 from "@/public/wave2.svg";
import AIS from "@/public/AIS.svg";
import Button from "./Button";

const Landing = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-ais-blue-100 via-ais-blue-200 to-ais-blue-300 overflow-hidden">
      <Image
        src={wave1}
        alt="Wave 1"
        className="object-cover w-full h-full absolute right-[16%] bottom-[0%] rotate-180"
      />

      <Image
        src={wave2}
        alt="Wave 2"
        className="object-cover w-full h-full absolute right-[10%] bottom-[10%]"
      />

      <div className="absolute flex flex-col bottom-[10%] right-[3%] items-center  text-white">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-4xl mb-4 ml-6">EMPOWERING FUTURE INNOVATORS</h1>

          <div className="flex justify-start">
            <Image src={AIS} alt="AIS Logo" className="scale-150" />
            <div className="flex flex-col m-8 text-3xl gap-1">
              <h2 className="font-light">ASSOCIATION FOR</h2>
              <h3 className="font-semibold">INFORMATION SYSTEMS</h3>
              <h4>AT UCR</h4>
            </div>
          </div>
          <div className="flex mt-6 gap-6 ml-8">
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
