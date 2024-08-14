import React from "react";
import Title from "../Title";
import Offers from "./Offers";
import { VALUES } from "@/data/offer";

const Offer = () => {
  return (
    <div className="flex flex-col my-10 gap-5 justify-center font-nunito items-center">
      <Title title={"WHAT WE OFFER"} />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full lg:items-start md:text-base text-sm">
        {VALUES.map((item, index) => (
          <Offers
            image={item.img}
            title={item.title}
            text={item.text}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Offer;
