import React from "react";

export default function Footer() {
  return (
    <>
    <div className="p-10 ">
      <div className="    grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-10  ">
        <div className=" py-4">
          <h1 className=" text-xl font-bold">Support</h1>
          <ul className=" list-none py-2 font-medium">
            <li>Help center</li>

            <li>Anti-discrimination</li>

            <li>Display support</li>

            <li>Cancellation Option</li>

            <li>Report neighbourhood concer</li>
            <li>Air Cover</li>
          </ul>
          
        </div>

        <div className="      ">
        <div>
          <h1 className="text-lg font-bold">Hosting</h1>
          <ul className=" list-none py-2 font-medium ">
            <li>Airbnb your phone</li>
            <li>Air cover For Host</li>
            <li>Hosting resources</li>
            <li>Community Form</li>
            <li>Hosting responsibly</li>
            <li>Join a free hosting class</li>
          </ul>
        </div>
        </div>
        <div className="     ">
        <div>
          <h1 className="text-lg font-bold ">Airbnb</h1>
          <ul className=" list-none  py-2   font-medium ">
            <li> Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>investors</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
        </div>
      </div>
      <hr />
      <div className=" bg-purple-50     gap-7 font-bold" >
      <div >
        <p className="   justify-center flex">©Airbnb,inc</p>
      </div>
      <ul className=" list-none flex gap-4 justify-center  sm:px-28 ">
        <li>Privacy</li>

        <li>Sitemap</li>

        <li>Term</li>

        <li>Company details</li>
      </ul>
      </div>
      </div>
    </>
  );
}
