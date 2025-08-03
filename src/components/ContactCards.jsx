import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import BreakLine from "./BreakLine";

const ContactCards = () => {
  const contacts = [
    {
      icon: <MdEmail size={32} />,
      title: "Email",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      linkText: "hello@createnix.com",
      linkHref: "mailto:hello@fiestavisuals.com",
    },
    {
      icon: <MdPhone size={32} />,
      title: "Phone",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      linkText: "+1 (555) 000-0000",
      linkHref: "tel:+15550000000",
    },
    {
      icon: <MdLocationOn size={32} />,
      title: "Office",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      linkText: "14 Wall St #15, New York",
      linkHref: "https://maps.google.com",
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 mb-[4rem]">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition w-full md:max-w-[40%] lg:max-w-[30%]"
          >
            <div className="mb-4 text-black">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-black mb-4 leading-relaxed">
              {item.description}
            </p>
            <a
              href={item.linkHref}
              className="text-sm text-black underline hover:text-blue-600 transition"
            >
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
      <BreakLine/>
    </section>
  );
};

export default ContactCards;
