import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any product within 30 days of purchase if unused and in original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 5-7 business days depending on your location.",
  },
  {
    question: "Do you offer international delivery?",
    answer:
      "Yes, we deliver to over 50 countries. Delivery times may vary based on location.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs border border-gray-300 px-4 py-1 rounded-full mb-4">
          FAQ
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-light leading-tight">
          <span className="font-semibold">Common</span>{" "}
          <span className="font-semibold">Questions</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <span className="text-[12px] font-medium">{item.question}</span>
              <span
                className={`text-xl transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            {/* Answer Section with Smooth Transition */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } px-4 text-gray-600 text-[12px] leading-6`}
            >
              <div className="py-2">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
