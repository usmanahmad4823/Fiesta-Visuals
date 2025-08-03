// src/components/Home.jsx
import React from "react";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import ServicesSection from "./Services";

const Home = () => {
  return (
    <>
      <main className="   relative top-0 h-full w-full bg-red-500">
        <Navbar />

        <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#F7F7F7] pt-24 px-4">
          <div
            // data-aos="fade-up"
            className=" fixed z-30 text-center text-black max-w-5xl mx-auto"
          >
            <h1 className="relative z-30 text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-normal mb-6">
              Fiesta Visuals
              <span className="align-middle text-2xl sm:text-4xl md:text-5xl">
                ©
              </span>
            </h1>
            <p className="relative z-30 text-lg sm:text-xl md:text-xl text-black">
              Design That Defines Brands
            </p>
          </div>
        </div>
        <Card />
      </main>
      <AboutUs />
      <Portfolio/>
      <Testimonial/>
      <ServicesSection/>
    </>
  );
};

export default Home;
