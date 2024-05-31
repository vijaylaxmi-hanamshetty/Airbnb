import React from "react";
import person from "../Images/person.png";

export default function Home() {
  return (
    <>
      <div className=" py-5 lg:px-20">
        <div className="justify-center px-5 ">
          <h1 className="text-5xl text-center font-bold flex justify-center text-black  lg:text-7xl ">
            Earn by helping local Hosts
          </h1>
          <div className="py-5  flex justify-center  ">
            <p className=" text-base text-center mt-5  font-normal w-full  lg:text-2xl md:text-xl ">
              Many Hosts want an experienced Co-Host to help them with hosting.
              From cleaning to managing guests, partner with local Hosts to grow
              your earning potential on your own terms.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center ml-4 mr-4 ">
        <button className=" px-10 py-1 md:px-16 md:py-3 bg-pink-500 text-white rounded-lg  font-serif  ">
          Become an experienced Co-Host
        </button>
      </div>
      <div className="flex justify-center mb-10 py-24 lg:px-20 px-5">
        <div className="flex justify-center  ">
          <div className="flex justify-center mb-10 ">
            <img
              src={person}
              alt=""
              className=" rounded-2xl lg:w-[95vw] lg:h-[90vh] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
