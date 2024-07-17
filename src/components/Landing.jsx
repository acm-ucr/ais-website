"use client";
import React from "react";
// import Link from "next/link";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <div className="flex items-center">
      <Button text="JOIN US" link="/join-us-link" />
      <Button text="LEARN MORE" link="/learn-more-ink" />
    </div>
  );
};

export default Landing;
