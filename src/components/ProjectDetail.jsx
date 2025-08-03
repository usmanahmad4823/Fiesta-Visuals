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
import ProjectInfo from "./ProjectInfo";
import Overview from "./Overview";
import Result from "./Result";

const ProjectDetail = () => {
  return (
    <section className="text-gray-700 rounded-4xl z-40 relative inset-0 bg-[#FFFFFF] ">
      <div className="relative bg-[#FFF] pt-[5rem]">
        <div className="portfolio-top">
          <PageSubtitle title="Portfolio" />

          {/* Main Heading */}

          <SectionHeading sectionHeading="Selected Projects" />

          <ProjectInfo
            projectName="Service:UI/UX Design"
            dateOfProject={
              <>
                Website:{" "}
                <a
                  href="https://your-website-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  View Live
                </a>
              </>
            }
          />
        </div>
        <main className=" pt-[2rem] w-full flex flex-col items-center ">
          <div className=" z-14 sticky bottom-0 box w-full h-full flex flex-col gap-5 overflow-hidden rounded-3xl  ">
            <PortfolioProject img={portfolio1} />{" "}
            {/*Remove Project Portfolio & ADD IMAGE HERE  */}
          </div>
          <div className=" z-13 sticky bottom-0 box w-full h-full flex flex-col gap-5 overflow-hidden rounded-3xl  ">
            <PortfolioProject img={portfolio2} />{" "}
            {/*Remove Project Portfolio & ADD IMAGE HERE  */}
          </div>
        </main>
      </div>
      <Overview />
      <main className=" pt-[2rem] w-full flex flex-col items-center ">
        <div className=" z-14 sticky bottom-0 box w-full h-full flex flex-col gap-5 overflow-hidden rounded-3xl  ">
          <PortfolioProject img={portfolio1} />{" "}
          {/*Remove Project Portfolio & ADD IMAGE HERE  */}
        </div>
        <div className=" z-13 sticky bottom-0 box w-full h-full flex flex-col gap-5 overflow-hidden rounded-3xl  ">
          <PortfolioProject img={portfolio2} />{" "}
          {/*Remove Project Portfolio & ADD IMAGE HERE  */}
        </div>
      </main>
      <Result />

      <div className="otherProjects">
        <div>
          <PageSubtitle title="Explore More" />

          {/* Main Heading */}

          <SectionHeading sectionHeading="Other Projects" />
        </div>
         <main className=" pt-[4rem] w-full flex items-center justify-around ">
          <div className=" z-14 sticky bottom-0 box w-[40%] h-[25rem] flex flex-col gap-5 overflow-hidden rounded-3xl  ">
            <PortfolioProject img={portfolio1} />
            {/*Remove Project Portfolio & ADD IMAGE HERE  */}
          </div>
          <div className=" z-13 sticky bottom-0 box w-[40%] h-[25rem] flex flex-col gap-5 overflow-hidden rounded-3xl  ">
            <PortfolioProject img={portfolio2} />
            {/*Remove Project Portfolio & ADD IMAGE HERE  */}
          </div>
        </main>
      </div>
    </section>
  );
};

export default ProjectDetail;
