import React from "react";
import Image from "next/image";
import aboutLanding from "@/public/aboutLanding.svg";

const AboutLanding = () => {
  return (
    <div className="relative bg-gradient-to-b from-ais-blue via-[#04125F]  to-[#01057F]">
      <div className="absolute text-4xl font-bold font-nunito text-white top-[50%] left-[46%]">
        <p>ABOUT US</p>
      </div>
      <div>
        <Image className="w-full" src={aboutLanding} />
      </div>
    </div>
  );
};

export default AboutLanding;
