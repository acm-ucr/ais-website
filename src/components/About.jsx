import React from "react";
import Image from "next/image";
import Kitten from "@/public/Kitten.webp";

const About = () => {
  return (
    <div className="max-w-7x1 mx-auto py-12">
      <h1 className="text-center font-semibold text-4x1 mb-6">About AIS</h1>
      <div className="relative grid grid-cols-2">
        <div className="relative">
          <Image
            src={Kitten}
            alt="Placeholder for Image"
            width={1000}
            height={667}
          />
        </div>

        <p className="max-w-prose" py-12 px-4>
          We are the Association for Information Systems (AIS) at the University
          of California, Riverside...
        </p>
      </div>
    </div>
  );
};

export default About;
