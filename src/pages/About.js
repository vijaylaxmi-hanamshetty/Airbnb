import React from "react";

import sectionsData from "../Component/Sections";

export default function About() {
  return (
    <>
      <div>
        {sectionsData.map((data, index) => (
          <div key={index} className=" py-10 lg:px-20 md:px-5">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 px-5 ">
              <div>
                <img src={data.image} alt="" className="rounded-2xl  w-full" />
              </div>
              <div className=" py-10   md:py-8 lg:py-28 md:px-7 ">
                <div className=" ">
                 <p className=" "> {data.icon}</p>
                  <h2 className="text-2xl lg:text-4xl  font-serif md:text-3xl ">{data.title}</h2>
                </div>
                <p className="font-thin text-xl lg:text-2xl lg:py-7 md:text-2xl">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}