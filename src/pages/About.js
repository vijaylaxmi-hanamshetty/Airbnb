import React from "react";

import sectionsData from "../Component/Sections";

export default function About() {
  return (
    <>
      <div>
        {sectionsData.map((data, index) => (
          <div key={index} className=" py-10">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-10 lg:gap-8  ">
              <div>
                <img src={data.image} alt="" className="rounded-2xl" />
              </div>
              <div className=" py-10 lg:py-28">
                <div className="">
                  {data.icon}
                  <h2 className="text-2xl ">{data.title}</h2>
                </div>
                <p className="font-thin text-xl">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
