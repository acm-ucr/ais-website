import Header from "@/components/HeaderComponent";
import Opportunities from "@/components/resources/Opportunities";

import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <Header header={"PROFESSIONAL DEVELOPMENT"} />
      <Opportunities />
    </div>
  );
};

export default page;
