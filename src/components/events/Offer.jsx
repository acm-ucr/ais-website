import React from "react";
import Title from "../Title";
import Offers from "./Offers";
import { OFFER } from "@/data/offer";

const Offer = () => {
  return (
    <div className="flex flex-col my-10 gap-5 justify-center font-nunito items-center">
      <Title title={"WHAT WE OFFER"} />
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 w-11/12 lg:items-start md:text-base text-sm">
        {OFFER.map((item, index) => (
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
