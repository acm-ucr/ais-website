import React from "react";
import Image from "next/image";
import aboutLanding from "@/public/aboutLanding.svg";

const AboutLanding = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 flex items-center justify-center text-4xl font-bold text-white">
        ABOUT US
      </div>
      <div className="relative h-screen bg-gradient-to-b from-ais-blue-100 via-ais-blue-200  to-ais-blue-300">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image className="w-full" src={aboutLanding} />
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
