import React from "react";
import Cat from "@/public/cat_placeholder.svg";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const BoardCard = ({ image, name, position, email, linkedin }) => {
  return (
    <div className="w-auto rounded-2xl border border-black flex flex-col items-center gap-2 text-ais-blue-100">
      <div className="relative w-80 h-72 mb-4 mt-1">
        <Image
          src={image}
          layout="fill"
          className="rounded-2xl object-cover"
          alt={name}
        />
      </div>

      <div className="flex flex-col gap-1 text-center mb-2">
        <div className="font-bold text-2xl"> {name} </div>
        <div className="font-semibold text-lg"> {position} </div>
      </div>

      <div className="flex justify-center gap-5 mb-3">
        <Link href={`mailto:${email}`}>
          <IoMdMail className="scale-150" />
        </Link>
        <Link href={linkedin}>
          <FaLinkedinIn className="scale-150" />
        </Link>
      </div>
    </div>
  );
};

export default BoardCard;
