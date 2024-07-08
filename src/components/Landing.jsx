import React from "react";
import Image from "next/image";
import wave1 from "../../public/wave1.svg";
import wave2 from "../../public/wave2.svg";
import AIS from "../../public/AIS.svg";

const Landing = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-ais-blue via-[#03125E] to-[#010580] overflow-hidden">
      {/* Waves */}
      <div className="absolute right-1/4 bottom-1/3 w-full h-full">
        <Image src={wave1} alt="Wave 1" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute right-1/4 bottom-1/4 w-full h-full">
        <Image src={wave2} alt="Wave 2" layout="fill" objectFit="cover" />
      </div>

      {/* Content */}
      <div className="absolute bottom-[20%] right-[20%] items-center flex flex-col text-white">
        <h1 className="text-5xl mb-4 font-bold">
          EMPOWERING FUTURE INNOVATORS
        </h1>

        <div className="flex items-center mb-4">
          <Image src={AIS} alt="AIS Logo" width={300} />
          <div>
            <h2 className="text-4xl">ASSOCIATION FOR</h2>
            <h3 className="text-4xl font-bold">INFORMATION SYSTEMS</h3>
            <h4 className="text-4xl">AT UCR</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
