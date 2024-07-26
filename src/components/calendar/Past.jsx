import React from "react";
import { PAST_EVENTS } from "@/data/past";

const Event = ({ name, date, location }) => {
  return (
    <div className="font-nunito border rounded-lg border-black shadow-sm shadow-black py-2.5">
      <div className="font-extrabold text-xl text-center pt-1 px-2">{name}</div>
      <div className="cont-semibold text-base text-center pt-1 px-2">
        {date} |{" "}
      </div>
      <div className="cont-semibold text-base text-center pt-1 px-2">
        {location}
      </div>
    </div>
  );
};

const Past = () => {
  return (
    <div className="">
      <div className="ml-[270px] justify-center w-full font-nunito text-xl font-extrabold">
        2023-2024
      </div>
      <div className="flex justify-center gap-24 w-full">
        {PAST_EVENTS.map((item, index) => (
          <Event
            name={item.event_name}
            date={item.date}
            location={item.location}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Past;
