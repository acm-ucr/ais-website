import React from "react";
import Title from "../Title";
import Carousel from "./Carousel";
import { ABOUT } from "@/data/placement";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-0 sm:mx-10 py-12 sm:px-10 gap-10 md:gap-10 justify-center font-nunito items-center lg:items-start">
      <div className="w-11/12 lg:w-5/12 ml-4 sm:ml-0 relative h-52 md:h-96 lg:h-0">
        <Carousel
          images={ABOUT}
          shadow={"shadow-[-17px_-17px_0px_0px_#dce6f9]"}
          init={"-50%"}
          exit={"10%"}
        />
        {/* <Image
          src={GroupPhoto}
          alt="AIS Group Photo"
          className="shadow-[-17px_-17px_0px_0px_#dce6f9] rounded-2xl mr-[17px] object-cover h-auto "
        /> */}
      </div>
      <div className="flex flex-col justify-center space-y-6 w-11/12 lg:w-2/3 py-5 text-left">
        <div className="flex justify-center lg:justify-start">
          <Title title={"ABOUT US"} />
        </div>
        <div className="text-left text-base sm:text-lg my-4">
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
