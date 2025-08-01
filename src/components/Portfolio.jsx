import React from "react";
import poster1 from "../assets/poster1.jpg";
import PageSubtitle from "./PageSubtitle";
import Button from "./Button";
import PortfolioProject from "./PortfolioProject";
import portfolio1 from "../assets/portfolio1.webp";
import portfolio2 from "../assets/portfolio2.webp";
import portfolio3 from "../assets/portfolio3.webp";
import portfolio4 from "../assets/portfolio4.webp";
import SectionHeading from "./SectionHeading";
import BreakLine from "./BreakLine";

const Portfolio = () => {
  return (
    <section className="text-gray-700 rounded-4xl z-40 relative inset-0 bg-[#FFFFFF]  text-center">
      <div className="relative bg-[#FFF] pt-[5rem]" >
        <div className="portfolio-top">
          <PageSubtitle title="Portfolio" />

          {/* Main Heading */}

          <SectionHeading sectionHeading="Selected Projects" />
        </div>
        <main className=" pt-[2rem] w-full flex flex-col items-center ">
          <div className=" z-14 sticky bottom-0 box w-full h-full flex flex-col gap-5 overflow-hidden rounded-3xl  ">
            <PortfolioProject img={portfolio1} />
          </div>
          <div className=" z-13 sticky bottom-0 box w-full h-full flex flex-col gap-5 overflow-hidden rounded-3xl  ">
            <PortfolioProject img={portfolio2} />
          </div>
          <div className=" z-12 sticky bottom-0 box w-full h-full flex flex-col gap-5 overflow-hidden rounded-3xl  ">
            <PortfolioProject img={portfolio3} />
          </div>
          <div className=" z-11 sticky bottom-0 box w-full h-full flex flex-col gap-5 overflow-hidden rounded-3xl  ">
            <PortfolioProject img={portfolio4} />
          </div>
        </main>
      </div>
      <BreakLine/>
    </section>
  );
};

export default Portfolio;
