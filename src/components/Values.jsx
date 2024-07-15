import React from "react";
import Value from "./Value";
import { VALUES } from "@/data/cards";

const Values = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-between w-8/12">
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
