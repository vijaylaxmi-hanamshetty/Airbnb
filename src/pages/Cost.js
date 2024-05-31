import React from 'react';
import img from "../Images/image5.jpg";
import { FiHome } from "react-icons/fi";

const Cost = () => {
  return (
    <div className="py-9 lg:px-5">
      <div className=" bg-purple-50">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:px-10 px-5 lg:py-5">
          <div className="lg:py-5 lg:px-5  md:py-5 md:px-5 ">
            <img
              src={img}
              alt=""
              className="rounded-2xl  lg:w-[40vw] lg:h-[80vh] object-cover w-full"
            />
          </div>
          <div className="py-10 md:py-8 lg:py-36 md:px-7">
            <FiHome className=" h-10 w-10" />
            <h2 className="text-2xl lg:text-4xl font-serif md:text-3xl">
              Do you need help with your listing?
            </h2>
            <p className="font-thin text-xl lg:text-2xl lg:py-1 md:text-2xl py-2">
              Whether you don’t have time, you’re far from your place, or
              you’re unable to host in person, you can get support from an
              experienced Co-Host in your area. Connect with a Co-Host and
              start discussing how you’ll collaborate.
            </p>
            <div className="py-6">
              <button className="bg-pink-600 text-white px-5 py-3 rounded-lg">
                Find a Co-Host
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cost;
