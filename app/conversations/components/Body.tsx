"use client";

import { NextPage } from "next";

interface BodyProps {}

const Body: NextPage<BodyProps> = () => {
  return (
    <div className="flex-1 overflow-y-auto ">
      <h1>Body</h1>
    </div>
  );
};

export default Body;
