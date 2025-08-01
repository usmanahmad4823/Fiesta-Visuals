import React from "react";

const cards = [
  {
    title: "Brand Identity",
    description:
      "Crafting a cohesive visual system including logo, colors, typography, and brand elements to define how your brand is seen and remembered.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    title: "Logo Design",
    description:
      "Creating memorable and meaningful logos that represent your brand’s personality, values, and purpose.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    title: "Print Design",
    description:
      "Designing high-quality printed materials such as brochures, flyers, posters, and business cards to support marketing and communication efforts.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    title: "Web Design",
    description:
      "Developing engaging and user-friendly website interfaces that blend aesthetics with intuitive functionality.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    title: "Packaging Design",
    description:
      "Designing product packaging that captures attention, communicates value, and enhances shelf appeal.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    title: "Motion Graphics",
    description:
      "Designing animated visuals, explainer videos, and branded motion content that bring stories to life.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
];

function ServiceCard() {
  return (
    <div className="pb-[5rem] px-4 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col justify-start items-start gap-4"
          >
            <img src={card.icon} alt={card.title} className="w-10 h-10" />
            <h2 className="text-xl font-medium text-gray-900">{card.title}</h2>
            <p className="text-[12px] text-gray-900 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
