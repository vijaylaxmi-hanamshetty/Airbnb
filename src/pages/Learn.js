import React from "react";

export default function Learn() {
  return (
    <div>
      <div className="  bg-purple-50 py-5">
        <p className=" text-2xl justify-center flex  md:text-2xl lg:text-2xl font-serif  px-12  py-10 ">
          To become an experienced Co-Host, you must meet minimum eligibility
          criteria
        </p>
        <div className=" flex justify-center py-4">
          <button className="bg-pink-500 px-6 py-3 mt-2 rounded-lg text-white text-lg ">
            Learn more
          </button>
        </div>
      </div>
      <div className="">
        <div className=" flex justify-center py-10 ">
          <div className=" bg-black w-20  h-1 font-thin  "></div>
        </div>
        <p className=" flex justify-center  px-5  text-sm md:text-base lg:text-base font-serif  ">
          Michael, experienced Co-host in Paris
        </p>
        <blockquote className=" flex justify-center font-light  px-7  text-xl py-3 lg:px-28 lg:py-5    ">
          <p className=" lg:text-2xl  font-serif">
            "Since I became a Co-host, I no longer feel alone in my work. I feel
            like I have the support and encouragement I need to grow my business
            and get out of my comfort zone."
          </p>
        </blockquote>
      </div>
    </div>
  );
}
