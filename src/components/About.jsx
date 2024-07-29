import React from "react";
import Image from "next/image";
import GroupPhoto from "@/public/AIS_About_GroupPhoto.webp";
import Title from "./Title";

const About = () => {
  return (
    <div className="max-w-7x1 mx-auto py-12 px-10 flex flex-col lg:flex-row items-start gap-8">
      <div className="relative">
        <div className="absolute bottom-4 right-4 bg-blue-100 rounded-2xl w-full h-full"></div>
        <Image
          src={GroupPhoto}
          alt="AIS Group Photo"
          layout="responsive"
          width={4096}
          height={2730}
          className="relative rounded-2xl"
        />
      </div>
      <div>
        <div className="mb-3">
          <Title title={"About AIS"} />
        </div>
        <p className="text-lg">
          We are the Association for Information Systems (AIS) at the University
          of California, Riverside. We are a student-run organization that aims
          to develop and promote professional and technical skills that are
          valuable to members interested in information systems, data analysis,
          and other related fields. With weekly meetings, we support our members
          with opportunities and workshops for networking, relevant
          certifications, information systems conferences, professional and
          personal development, and exposure among working professionals, guest
          speakers, and peers.
        </p>
      </div>
    </div>
  );
};

export default About;
