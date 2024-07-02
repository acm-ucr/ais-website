import React from "react";
import Image from "next/image";
import AIS from "@/public/AIS.svg";

const Box = () => {
  return (
    <div className="">
      <Image src={AIS} alt='alt="image' />
    </div>
  );
};

export default Box;
