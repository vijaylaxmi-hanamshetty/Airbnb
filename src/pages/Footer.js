import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const footerContent = [
    {
      title: "Support",
      items: [
        "Help center",
        "Anti-discrimination",
        "Display support",
        "Cancellation Option",
        "Report neighbourhood concer",
        "Air Cover",
      ],
    },
    {
      title: "Hosting",
      items: [
        "Airbnb your phone",
        "Air cover For Host",
        "Hosting resources",
        "Community Form",
        "Hosting responsibly",
        "Join a free hosting class",
      ],
    },
    {
      title: "Airbnb",
      items: [
        "Newsroom",
        "New features",
        "Careers",
        "Investors",
        "Airbnb.org emergency stays",
      ],
    },
  ];

  return (
    <>
      <div className=" bg-purple-50 ">
        <div className="lg:px-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-10   ">
          {footerContent.map((category, index) => (
            <div key={index} className="py-4">
              <h1 className="text-lg font-bold lg:text-xl">{category.title}</h1>
              <ul className="list-none py-2 font-serif">
                {category.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr />
        <div className=" gap-7 font-sans py-5 flex flex-col items-center lg:flex-row justify-center lg:justify-between px-10 lg:px-20">
          <ul className="list-none flex flex-col sm:flex-row gap-4 mb-4 lg:mb-0">
            <li>© Airbnb, Inc.</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Term</li>
            <li>Company details</li>
          </ul>

          <div className="hidden md:flex gap-4 items-center">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
