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
          suspendisse ultrices gravida dictum fusce ut placerat orci nulla
          pellentesque dignissim enim sit amet venenatis urna cursus eget nunc
          scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt
          augue interdum velit euismod in pellentesque massa placerat duis
          ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante
          metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu
          non odio euismod risus feugiat in ante metus dictum at tempor commodo
          ullamcorper a lacus vestibulum sed arcu non odio euismod sed
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
