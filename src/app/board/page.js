import Wrapped from "@/components/board/WrappedBoard";
import Header from "@/components/HeaderComponent";

import React from "react";

const page = () => {
  return (
    <div>
      <Header header={"OUR BOARD"} />
      <Wrapped />
    </div>
  );
};

export default page;
