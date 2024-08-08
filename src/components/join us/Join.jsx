import React from "react";
import Image from "next/image";
import imagename from "@/public/whyJoin.webp";
import Title from "./Title";

const Join = () => {
  return (
    <div className="flex mx-28 my-12 gap-3 justify-center font-nunito">
      <div className="flex flex-col justify-center space-y-6 mr-12 w-2/3 py-5">
        <div className="flex justify-end text-right">
          <Title title={"WHY JOIN"} />
        </div>
        <div className="text-right text-lg my-4">
          suspendisse ultrices gravida dictum fusce ut placerat orci nulla
          pellentesque dignissim enim sit amet venenatis urna cursus eget nunc
          scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt
          augue interdum velit euismod in pellentesque massa placerat duis
          ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante
          metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu
          non odio euismod risus feugiat in ante metus dictum at tempor commodo
          ullamcorper a lacus vestibulum sed arcu non odio euismod sed
        </div>
        <div className="flex font-semibold gap-8 justify-between text-2xl">
          <div>100+ members</div>
          <div>50+ events</div>
          <div>50+ alumni</div>
          <div>etc etc</div>
        </div>
      </div>

      <Image
        src={imagename}
        className="w-5/12 shadow-[17px_-17px_0px_0px_#dce6f9] rounded-2xl mr-[17px] object-cover h-auto"
        alt="AIS team photo"
      />
    </div>
  );
};

export default Join;
