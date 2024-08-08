import React from "react";
import Image from "next/image";
import GroupPhoto from "@/public/AIS_About_GroupPhoto.webp";
import Title from "./Title";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-10 py-12 px-10 gap-10 justify-center font-nunito">
      <Image
        src={GroupPhoto}
        alt="AIS Group Photo"
        className="w-5/12 shadow-[-17px_-17px_0px_0px_#dce6f9] rounded-2xl mr-[17px] object-cover h-auto"
      />

      <div className="flex flex-col justify-center space-y-6 mr-12 w-2/3 py-5">
        <div className="flex justify-start">
          <Title title={"ABOUT US"} />
        </div>
        <div className="text-left text-lg my-4">
          We are the Association for Information Systems (AIS) at the University
          of California, Riverside. We are a student-run organization that aims
          to develop and promote professional and technical skills that are
          valuable to members interested in information systems, data analysis,
          and other related fields. With weekly meetings, we support our members
          with opportunities and workshops for networking, relevant
          certifications, information systems conferences, professional and
          personal development, and exposure among working professionals, guest
          speakers, and peers.
        </div>
      </div>
    </div>
  );
};

export default About;
