import React from "react"
import img from "../Images/Ab.png";
import Home from "../pages/Home";
import About from "../pages/About";
import Learn from "../pages/Learn";
import Suport from "../pages/Suport";
import Cost from "../pages/Cost";
import Question from "../pages/Question";
import Footer from "../pages/Footer";
import Set from "../pages/Set";

export default function Nav() {
  return (
    <div>
      <div className="bg-white fixed w-full top-0 z-10">
        <div className="flex px-20 py-4 gap-1">
          <img src={img} className="h-10 w-10" alt="Airbnb logo" />
          <p className="text-red-500 text-3xl font-serif">airbnb</p>
        </div>
        <hr />
      </div>
      <div className="pt-20"> {/* Added padding-top to avoid content hiding behind the fixed nav */}
        <Home />
        <About />
        <Learn />
        <Suport />
        <Set />
        <Cost />
        <Question />
        <Footer />
      </div>
    </div>
  );
}
