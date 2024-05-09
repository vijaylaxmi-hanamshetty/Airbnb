import React from "react";

import Data from "../Component/data";
export default function Suport() {
  return (
    <div>
      <h1 className=" text-4xl font-medium py-10    px-16 lg:text-5xl  ">Support to help you succeed</h1>
      <div className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1">
        {Data.map((item, index) => (
          <div key={index} className="p-16">
            <div className="text-center">{item.icon}</div>
            <h2 className="text-2xl font-semibold mt-4 ">{item.title}</h2>
            <p className="   text-xl ">{item.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}
