import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaXing,
} from "react-icons/fa";

const SocialMedia = () => {
  const icons = [
    {
      href: "https://www.instagram.com",
      Icon: FaInstagram,
      label: "Instagram",
    },
    { href: "https://www.linkedin.com", Icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://www.behance.net", Icon: FaBehance, label: "Behance" },
    { href: "https://www.dribbble.com", Icon: FaDribbble, label: "Dribbble" },
    { href: "https://www.xing.com", Icon: FaXing, label: "Xing" },
  ];

  return (

        <div className=" flex flex-wrap justify-center  gap-8 py-4">
          {icons.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="bg-white text-gray-600 hover:text-black w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-black hover:border-1 transition"
            >
              <Icon className="text-xl" />
            </a>
          ))}
        </div>
  );
};

export default SocialMedia;
