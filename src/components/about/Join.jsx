import React from "react";
import Image from "next/image";
import imagename from "@/public/whyJoin.webp";
import Title from "../Title";

const Join = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mx-4 md:mx-16 lg:mx-28 my-12 gap-3 justify-center font-nunito">
      <div className="flex flex-col justify-center space-y-6 lg:mr-12 w-full lg:w-2/3 py-5">
        <div className="flex justify-center lg:justify-end text-center lg:text-right">
          <Title title={"WHY JOIN"} />
        </div>
        <div className="text-left lg:text-right text-base md:text-lg my-4">
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
        </div>
        <div className="flex font-semibold gap-4 md:gap-8 justify-between text-base md:text-2xl">
          <div>100+ members</div>
          <div>50+ events</div>
          <div>50+ alumni</div>
          <div>etc etc</div>
        </div>
      </div>

      <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
        <Image
          src={imagename}
          className="shadow-[17px_-17px_0px_0px_#dce6f9] rounded-2xl mr-[17px] object-cover h-auto max-w-full"
          alt="AIS team photo"
        />
      </div>
    </div>
  );
};

export default Join;
