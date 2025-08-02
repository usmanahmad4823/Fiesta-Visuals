import React from "react";
import BreakLine from "./BreakLine";

const Overview = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-4 py-16">
      <div className=" max-w-[50%] p-4 " >
        <h1 className="text-4xl font-semibold mb-8">Overview</h1>

        <p className="text-[12px] leading-5 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          consequat lectus. Donec porta tortor eleifend imperdiet cursus. Mauris
          accumsan erat a posuere. Mauris at condimentum velit, sit amet tempor
          turpis. Donec quis enim eu turpis venenatis pulvinar. Cras commodo
          vitae magna ac elementum.
        </p>

        <p className="text-[12px] leading-5 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          consequat lectus. Donec porta tortor eleifend imperdiet cursus. Mauris
          accumsan erat a posuere. Mauris at condimentum velit, sit amet tempor
          turpis. Donec quis enim eu turpis venenatis pulvinar. Cras commodo
          vitae magna ac elementum.
        </p>

        <ul className="list-disc list-inside leading-5 text-[12px] text-left ml-8 w-fit mb-8">
          <li>Duis in efficitur libero</li>
          <li>Nulla vel urna dui</li>
          <li>Etiam eu congue sem</li>
          <li>Nunc erat libero lacinia</li>
        </ul>
      </div>
      <BreakLine/>
    </section>
  );
};

export default Overview;
