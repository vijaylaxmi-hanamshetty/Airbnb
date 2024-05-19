import React from "react";

export default function Learn() {
  return (
    <div>
      <div className=" bg-indigo-50 ">
        <p className=" text-2xl justify-center flex lg:text-3xl font-serif  px-12 ">
          To become an experienced Co-Host, you must meet minimum eligibility
          criteria
        </p>
        <div className=" flex justify-center py-4">
          <button className="bg-pink-500 px-6 py-3 mt-2 rounded-lg text-white ">
            Learn more
          </button>
        </div>
      </div>
      <div className="">
        <div className=" flex justify-center py-10">
          <div className=" bg-black w-20 h-1  "></div>
        </div>
        <p className=" flex justify-center  text-xl  font-serif  ">
          Michael, experienced Co-host in Paris
        </p>
        <blockquote className=" flex justify-center   from-neutral-600  px-16  text-2xl py-3 lg:px-28 lg:py-5   ">
          <p className="  font-serif">
            "Since I became a Co-host, I no longer feel alone in my work. I feel
            like I have the support and encouragement I need to grow my business
            and get out of my comfort zone."
          </p>
        </blockquote>
      </div>
    </div>
  );
}
