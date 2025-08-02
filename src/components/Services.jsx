import React from 'react'
import SectionHeading from './SectionHeading'
import PageSubtitle from './PageSubtitle'
import ServiceCard from './ServiceCard'
import BreakLine from './BreakLine'

const ServicesSection = () => {
  return (
   <section className="text-gray-700 rounded-4xl z-40 relative inset-0 bg-[#FFFFFF]  text-center">
     <BreakLine/>
      <div className="relative bg-[#FFF] pt-[5rem]" >
        <div className="portfolio-top">
          <PageSubtitle title="Services" />

          {/* Main Heading */}

          <SectionHeading sectionHeading="Our Services" />
        </div>
        <main className=" pt-[2rem] w-full flex flex-col  items-center ">
          <ServiceCard/>
        </main>
      </div>
    </section>
  )
}

export default ServicesSection