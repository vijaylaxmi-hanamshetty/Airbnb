import React from "react";
import img from "../Images/OIP.jpg";
import Home from "../pages/Home";
import About from "../pages/About";
import Learn from "../pages/Learn";
import Suport from "../pages/Suport";
import Set from "../pages/Set";
import Cost from "../pages/Cost";
import Question from "../pages/Question";
import Footer from "../pages/Footer";
export default function Nav() {
  return (
    <div>
      <img src={img} className=" h-20  px-16 " alt="" />
      <hr className=" bg-black" />
      <div>
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
