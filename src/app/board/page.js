import Wrapped from "@/components/board/WrappedBoard";
import AboutLanding from "@/components/about/AboutLanding";

import React from "react";

const page = () => {
  return (
    <div>
      <AboutLanding header={"OUR BOARD"} />
      <Wrapped />
    </div>
  );
};

export default page;
