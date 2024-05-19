import React from "react";
import person from "../Images/person.png";

export default function Home() {
  return (
    <>
      <div className=" ">
        <div className="    justify-center ">
          <h1 className="text-5xl text-center font-bold  text-black    lg:text-6xl">
            Earn by helping local Hosts
          </h1>
          <div className="py-5 lg:flex lg:justify-center  ">
            <p className=" text-xl text-center mt-5   text-black  w-full  lg:text-3xl lg:px-5">
              Many Hosts want an experienced Co-Host to help them with hosting.
              From cleaning to managing guests, partner with local Hosts to grow
              your earning potential on your own terms.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 lg:py-10 ">
        <button className="px-20 py-3 bg-pink-600 text-white rounded-lg  font-serif  ">
          Become an experienced Co-Host
        </button>
      </div>
      <div className="flex justify-center mb-10">
        <div className="flex justify-center mb-10">
          <div className="flex justify-center mb-10 px-5  lg:px-20">
            <img
              src={person}
              alt=""
              className=" rounded-2xl lg:w-[95vw] lg:h-[90vh] "
            />
          </div>
        </div>
      </div>
    </>
  );
}
