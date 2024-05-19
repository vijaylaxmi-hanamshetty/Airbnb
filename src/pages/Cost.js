import React from "react";
import img from "../Images/image5.jpg";
import { FiHome } from "react-icons/fi";
export default function Cost() {
  return (
    <div className="py-2">
      <div className=" bg-purple-50 ">
        <div className="grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 sm:px-10 px-5 lg:px-20  ">
          <div className=" py-5 ">
            <img src={img} alt="" className=" rounded-2xl w-full md:h-full" />
          </div>
          <div className=" px-10 lg:py-10   ">
            {" "}
            <FiHome className="h-7 w-20 lg:h-10 lg:w-25" />
            <h2 className=" text-2xl lg:text-4xl  font-serif ">Do you need help with your listing?</h2>
            <p className=" font-thin text-xl lg:text-2xl ">
              Whether you don’t have time, you’re far from your place or you’re
              unable to host in person, you can get support from an experienced
              Co-Host in your area. Connect with a Co-Host and start discussing
              how you’ll collaborate
            </p>{" "}
            <div className=" py-6">
              <button className=" bg-pink-600 text-white  px-5 py-3 rounded-lg">
                {" "}
                found the cost{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
