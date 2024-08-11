import Link from "next/link";
import React from "react";
import Image from "next/image";
import wave1 from "@/public/wave1.svg";

const NotFound = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <div className="text-9xl font-bold px-8 py-6 mb-4">404</div>
        <div className="h-1 w-52 bg-white pt-1 mb-8 mx-auto"></div>
        <div className="text-5xl font-semibold pt-7 pb-9 mb-9">
          PAGE NOT FOUND
        </div>
        <Link
          href="/"
          className="border-2 border-ais-blue-100 bg-white text-ais-blue-100 font-semibold text-2xl px-12 py-3 rounded-full hover:bg-gray-200"
        >
          BACK TO HOME
        </Link>
      </div>

      <div className="relative h-screen bg-gradient-to-b from-ais-blue-100 via-ais-blue-200 to-ais-blue-300">
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
