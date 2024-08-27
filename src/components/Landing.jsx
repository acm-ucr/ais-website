"use client";
import React from "react";
import Image from "next/image";
import wave from "@/public/wave.svg";
import wave2 from "@/public/wave2.svg";
import AIS from "@/public/AIS.svg";
import Button from "./Button";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-ais-blue-100 via-ais-blue-200 to-ais-blue-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute w-full h-full"
      >
        <Image
          src={wave}
          alt="Wave 1"
          className="object-cover w-full h-full absolute right-[0%] bottom-[0%] rotate-100 animate-[pulse_8s_infinite]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute w-full h-full"
      >
        <Image
          src={wave2}
          alt="Wave 2"
          className="object-cover w-full h-full absolute right-[10%] bottom-[20%] rotate-12 scale-125 animate-[pulse_16s_ease-in-out_infinite]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.05, delay: 0.2 }}
        className="absolute inset-0 lg:-inset-7 lg:right-8 flex flex-col justify-end items-center md:items-end md:pb-[6%] md:pr-[5%] text-white p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center md:items-start gap-3 max-w-xl w-full whitespace-normal lg:whitespace-nowrap lg:mx-36 lg:my-20 xl:my-0 xl:mx-0"
        >
          <h1 className="text-xl md:text-4xl text-center md:text-left md:ml-[-98px] lg:ml-[-15px] xl:ml-4 mb-4 z-10">
            EMPOWERING FUTURE INNOVATORS
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center md:items-start z-10"
          >
            <Image
              src={AIS}
              alt="AIS Logo"
              className="scale-125 md:scale-150 mb-4 md:mb-0"
            />
            <div className="flex flex-col items-center md:items-start m-4 md:m-6 text-xl md:text-3xl gap-1">
              <h2 className="font-light">ASSOCIATION FOR</h2>
              <h3 className="font-semibold">INFORMATION SYSTEMS</h3>
              <h4>AT UCR</h4>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex mt-4 gap-4 md:gap-6 md:ml-8 z-10"
          >
            <Button
              text={"JOIN US"}
              link={
                "https://aisatucr.slack.com/join/shared_invite/zt-17p0a7or5-tXFXxwufY~vOQlFhkB0edQ#/shared-invite/email"
              }
              target={"_blank"}
            />
            <Button text={"LEARN MORE"} link={"about"} target={null} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;
