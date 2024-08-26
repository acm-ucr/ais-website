import AboutLanding from "@/components/about/AboutLanding";
import Opportunities from "@/components/resources/Opportunities";

import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <AboutLanding header={"PROFESSIONAL DEVELOPMENT"} />
      <Opportunities />
    </div>
  );
};

export default page;
