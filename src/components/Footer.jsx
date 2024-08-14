import React from "react";
import { icons } from "../data/icons"; // Correct relative path to icons.js

const Footer = () => {
  return (
    <div className="bg-[#002855] text-white py-10">
      <div className="flex items-center justify-center">
        <image src="/AIS.svg" alt="AIS Logo" className="w-28 mr-0" />
        <div className="text-xl">
          Association for <br />
          <span className="font-bold">Information Systems</span> <br />
          at UCR
        </div>
      </div>

      <p className="mt-4 text-sm text-center">
        Reach out to us today: <br />
        <a href="mailto:aisatucr@gmail.com" className="text-white">
          aisatucr@gmail.com
        </a>
      </p>
      <div className="flex justify-center gap-x-8 mt-8">
        {icons.map(({ name, icon: Icon, link }) => (
          <a
            key={name}
            href={link}
            className="text-white text-3xl hover:text-gray-300 transition-colors duration-300"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
