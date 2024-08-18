import React from "react";
import Value from "./Value";
import Title from "../Title";
import { VALUES } from "@/data/values";

const Values = () => {
  return (
    <div className="flex flex-col items-center w-full gap-10 font-nunito">
      <Title title={"OUR VALUES"} />
      <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-5 xl:gap-10 w-full">
        {VALUES.map((item, index) => (
          <Value
            title={item.title}
            text={item.text}
            image={item.img}
            color={item.color}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Values;
