"use client";
import { useState } from "react";
import Boards from "./Boards";
import Interns from "./Interns";
import Alumnis from "./Alumnis";
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
      {component === "alumni" && <Alumnis />}
    </div>
  );
};

export default Wrapped;
