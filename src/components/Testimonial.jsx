import React from "react";
import PageSubtitle from "./PageSubtitle";
import SectionHeading from "./SectionHeading";

const Testimonial = () => {
  return (
    <section className="text-gray-700 rounded-4xl z-40 relative inset-0 bg-[#FFFFFF] py-[2.5rem]  text-center">
      <div className="relative  bg-[#FFF] py-[2.4rem]">
        <div className="testimonials-top">
          <PageSubtitle title="Testimonials" />
          {/* Main Heading */}

          <SectionHeading sectionHeading="Client Feedback" />
        </div>
        <main className=" pt-[2rem] w-full flex flex-col  items-center ">
          <div className="bg-[#F7F7F7] border-gray-300 border-[1px] rounded-3xl py-[2rem] px-[5rem] min-w-[80%] max-w-4xl mx-auto text-center">
            <div className="max-w-[38rem] m-auto">
              <img
                src="https://cdn.prod.website-files.com/682b7a5d0262d836f09f8093/682d34f9bcbcb3b4f542a7ff_logoipsum-297.svg"
                alt="Logo"
                className="mx-auto w-32"
              />
              <p className="text-normal font-medium italic text-gray-700 mb-[10px] mt-[20px] ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat."
              </p>
              <div className="flex flex-col mt-[1rem] items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User"
                  className="w-14 h-14 rounded-full mb-2"
                />
                <h3 className="font-semibold text-[11px] text-gray-900">
                  Name Surname
                </h3>
                <p className="text-[10px] text-gray-500">
                  Position, Company name
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Testimonial;
