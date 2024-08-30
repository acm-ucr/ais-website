import React from "react";
import Image from "next/image";
import aboutLanding from "@/public/aboutLanding.svg";
import boardLanding from "@/public/wave.svg";
import eventsLanding from "@/public/wave1.svg";
import alumniLanding from "@/public/wave4.svg";
import resourcesLanding from "@/public/wave3.svg";

const AboutLanding = ({ header }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 flex items-center justify-center text-4xl font-bold text-white">
        {header}
      </div>
      <div className="relative h-screen bg-gradient-to-b from-ais-blue-100 via-ais-blue-200 to-ais-blue-300">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {header === "ABOUT US" && (
            <Image className="w-full" src={aboutLanding} alt="About Wave" />
          )}
          {header === "OUR BOARD" && (
            <Image className="w-full" src={boardLanding} alt="Board Wave" />
          )}
          {header === "OUR BOARD" && (
            <Image className="w-full" src={boardLanding} alt="Board Wave" />
          )}
          {header === "EVENTS" && (
            <Image className="w-full" src={eventsLanding} alt="Board Wave" />
          )}
          {header === "OUR ALUMNI" && (
            <Image className="w-full" src={alumniLanding} alt="Alumni Wave" />
          )}
          {header === "PROFESSIONAL DEVELOPMENT" && (
            <Image
              className="w-full"
              src={resourcesLanding}
              alt="Alumni Wave"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
