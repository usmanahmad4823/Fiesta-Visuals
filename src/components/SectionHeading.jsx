import React from 'react'

const SectionHeading = ({sectionHeading}) => {
  return (
      <div className="portfolio-top flex items-center justify-center ">
        {/* Main Heading */}
        <h1 className=" text-gray-700 text-6xl font-medium sm:text-7x mt-[20px] mb-[10px] md:text-10xl lg:text-12xl leading-tight max-w-8xl">
          {sectionHeading}
        </h1>
      </div>
  )
}

export default SectionHeading