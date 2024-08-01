import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Intern = () => {
  return (
    <div className="w-1/6 rounded-xl border border-black">
      <div className="flex flex-col items-center justify-center">
        <div>Justin Lamy</div>
        <div>President</div>
      </div>
      <div className="flex flex-row justify-center gap-2 mb-4">
        <IoMdMail />
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default Intern;
