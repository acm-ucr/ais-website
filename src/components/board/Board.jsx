import React from "react";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const animations = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Board = ({
  image,
  name,
  position,
  email,
  linkedin,
  target = "_blank",
}) => {
  return (
    <motion.div
      className="w-80 rounded-2xl border border-black flex flex-col items-center gap-2 text-ais-blue-100"
      variants={animations}
      initial="start"
      whileInView="end"
      transition={{ duration: 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={image}
        className="rounded-2xl object-cover h-80 p-0.5"
        alt={name}
      />
      <div className="font-bold text-2xl">{name}</div>
      <div className="font-semibold text-lg">{position}</div>
      <div className="flex justify-center gap-5 mb-3">
        <Link href={`mailto:${email}`} target={target}>
          <IoMdMail className="scale-150" />
        </Link>
        <Link href={linkedin} target={target}>
          <FaLinkedinIn className="scale-150" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Board;
