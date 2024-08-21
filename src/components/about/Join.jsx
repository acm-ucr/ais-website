"use client";
import React from "react";
import Title from "../Title";
import Carousel from "./Carousel";
import { JOIN } from "@/data/placement";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, x: -50 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const carouselAnimation = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: "easeInOut",
    },
  },
};

const Join = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mx-4 md:mx-16 lg:mx-28 my-12 gap-3 justify-center font-nunito">
      <motion.div
        className="flex flex-col justify-center space-y-6 lg:mr-12 w-full lg:w-2/3 py-5"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex justify-center lg:justify-end text-center lg:text-right mt-20 lg:mt-0"
          variants={animation}
          custom={0}
        >
          <Title title={"WHY JOIN"} />
        </motion.div>
        <motion.div
          className="text-left lg:text-right text-base md:text-lg my-4"
          variants={animation}
          custom={1}
        >
          Joining the Association for Information Systems at UC Riverside
          provides a unique opportunity to develop both technical and
          professional skills essential for success. Through our workshops and
          certifications, you{"'"}ll gain hands-on experience with the latest
          tools and technologies used in the tech industry. Our real-world
          projects enable you to apply classroom knowledge to practical
          scenarios and develop problem-solving skills in a professional
          setting. Network with industry professionals, alumni, and peer at our
          events to build valuable connections for career guidance and
          opportunities.
        </motion.div>
        <motion.div
          className="flex font-semibold gap-4 md:gap-8 justify-between text-base md:text-2xl"
          variants={animation}
          custom={2}
        >
          <div>100+ members</div>
          <div>50+ events</div>
          <div>50+ alumni</div>
          <div>etc etc</div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full lg:w-5/12 flex justify-center lg:justify-end relative h-60 md:h-96 lg:h-0 "
        initial="hidden"
        animate="visible"
        variants={carouselAnimation}
      >
        <Carousel
          images={JOIN}
          shadow={"shadow-[17px_-17px_0px_0px_#dce6f9]"}
          init={"50%"}
          exit={"-10%"}
        />
        {/* <Image
          src={imagename}
          className="shadow-[17px_-17px_0px_0px_#dce6f9] rounded-2xl mr-[17px] object-cover h-auto max-w-full"
          alt="AIS team photo"
        /> */}
      </motion.div>
    </div>
  );
};

export default Join;
