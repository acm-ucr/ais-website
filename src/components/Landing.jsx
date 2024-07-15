import React from "react";
import Image from "next/image";
import wave1 from "@/public/wave1.svg";
import wave2 from "@/public/wave2.svg";
import AIS from "@/public/AIS.svg";

const Landing = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-ais-blue-100 via-ais-blue-200 to-ais-blue-300 overflow-hidden">
      <div className="absolute right-1/4 bottom-1/3 w-full h-full">
        <Image
          src={wave1}
          alt="Wave 1"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="absolute right-1/4 bottom-1/4 w-full h-full">
        <Image
          src={wave2}
          alt="Wave 2"
          layout="fill"
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-[22%] right-[3%] items-center flex flex-col text-white">
        <div className="flex flex-col items-start mb-4">
          <h1 className="text-5xl mb-4 ml-6 font-bold">
            EMPOWERING FUTURE INNOVATORS
          </h1>

          <div className="flex justify-start">
            <Image src={AIS} alt="AIS Logo" className="scale-150" />
            <div className="flex flex-col m-8">
              <h2 className="text-4xl font-light">ASSOCIATION FOR</h2>
              <h3 className="text-4xl font-semibold">INFORMATION SYSTEMS</h3>
              <h4 className="text-4xl">AT UCR</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
