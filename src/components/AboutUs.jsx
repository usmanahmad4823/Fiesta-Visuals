import React from "react";
import Button from "./Button";
import PageSubtitle from "./PageSubtitle";
import BreakLine from "./BreakLine";
import "./AboutStyle.css"


const AboutUs = () => {
  return (
    <div className="relative w-full bg-[#F7F7F7] ">
      <section className=" rounded-4xl relative z-50 bg-white flex flex-col items-center justify-center px-4 text-center min-h-screen">
        {/* About Button */}
        <PageSubtitle title="About" />

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-md leading-tight max-w-4xl">
          We're a graphic design agency that helps brands express their value
          through bold visuals
        </h1>

        {/* Stats and Contact */}
        <div className="  w-full py-14 px-4">
          {/* Spacer */}

          {/* Grid Container */}
          <div className=" w-full flex items-center justify-around ">
            {/* Years of Experience Block */}
            <div className=" flex flex-col items-center intro-content-block">
              <span className="text-[8vh] font-bold big-heading">
                <span className="text-md font-light text-gray-400 pb-6 ">
                  +
                </span>
                20
              </span>
              <div className="text-base mt-2 text-left line">
                Years of Experience
              </div>
            </div>

            {/* Contact Button */}
            <Button btn="Contact Us" visit="services" />

            {/* Successful Projects Block */}
            <div className=" flex flex-col items-center intro-content-block text-right">
              <span className="text-[8vh] font-bold big-heading">
                <span className="text-md font-light text-gray-400 pb-6 ">
                  +
                </span>
                99
              </span>
              <div className="text-base mt-2 text-right line">
                Successful Projects
              </div>
            </div>
          </div>

          {/* Divider Line */}
          {/* <div className="border-t border-gray-300 mt-12"></div> */}
        </div>
      </section>
      <BreakLine/>
    </div>
  );
};

export default AboutUs;
