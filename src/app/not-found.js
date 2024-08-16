import Link from "next/link";
import React from "react";
import Image from "next/image";
import wave1 from "@/public/wave1.svg";

const NotFound = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <div className="text-6xl md:text-9xl font-bold px-4 md:px-8 py-4 md:py-6 mb-2 md:mb-4">
          404
        </div>
        <div className="text-3xl md:text-5xl font-semibold py-4 md:pt-7 md:pb-9 mb-6 md:mb-9 text-center">
          PAGE NOT FOUND
        </div>
        <Link
          href="/"
          className="border-2 border-ais-blue-100 bg-white text-ais-blue-100 font-semibold text-lg md:text-2xl px-8 md:px-12 py-2 md:py-3 rounded-full hover:bg-gray-200"
        >
          BACK TO HOME
        </Link>
      </div>

      <div className="relative h-screen w-full bg-gradient-to-b from-ais-blue-100 via-ais-blue-200 to-ais-blue-300">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={wave1}
            alt="404 Wave 1"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
