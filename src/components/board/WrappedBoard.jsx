"use client";
import { useState } from "react";
import Boards from "./Board";
import Interns from "./Intern";
import Filter from "../Filter";
import { BOARD } from "@/data/filters";

const Wrapped = () => {
  const [component, setComponent] = useState("board");
  const handleFilterChange = (component) => {
    setComponent(component);
  };
  return (
    <div>
      <Filter filters={BOARD} onChange={handleFilterChange} title={""} />
      {component === "board" && <Boards />}
      {component === "interns" && <Interns />}
    </div>
  );
};

export default Wrapped;
