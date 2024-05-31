import React from "react";

const Section = ({ icon, title, description, image, reverse }) => {
  return (
    <div className="px-5 lg:px-16">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2"> 
        <div className={`py-5 ${reverse ? 'lg:order-last' : 'lg:order-first'}`}>
          <img src={image} alt={title} className="rounded-2xl  w-full  lg:w-[40vw] lg:h-[90vh] object-cover md:w-[40vw] md:h-[80vh]" />
        </div>
        <div className={`py-10 md:py-8 lg:py-48 md:px-7 ${reverse ? 'lg:order-first' : 'lg:order-last'}`}>
          <div>
            <p>{icon}</p>
            <h2 className="text-2xl lg:text-4xl font-serif md:text-3xl">
              {title}
            </h2>
          </div>
          <p className="font-thin text-xl lg:text-2xl lg:py-1 md:text-2xl py-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;

