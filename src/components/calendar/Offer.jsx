import React from "react";
import Title from "../Title";
import Card from "./OfferCard";
import { VALUES } from "@/data/offer";

const Offer = () => {
  return (
    <div className="flex flex-col my-3 gap-5 justify-center font-nunito items-center">
      <Title title={"WHAT WE OFFER"} />
      <div className="flex justify-center gap-5 w-full items-start">
        {VALUES.map((item, index) => (
          <Card
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
