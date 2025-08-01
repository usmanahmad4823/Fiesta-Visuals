import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaXing,
} from "react-icons/fa";

const Footer = () => {
  const navItems = ["Home", "Portfolio", "Services", "Contact"];
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
    <footer className="bg-red-400 w-full h-full">
      Hello World
    </footer>
    // <footer className="bg-[#F7F7F7] text-center w-full">
    //   <div className=" bg-amber-300 container mx-auto px-4 py-12 flex flex-col items-center">
    //     <h1 className="text-gray-800  font-bold mb-2">
    //       Fiesta Visuals
    //     </h1>
    //     <p className= "bg-amber-700 text-gray-600 ">
    //       Design That Defines Brands
    //     </p>

    //     {/* Social Icons */}
    //     <div className=" bg-green-400 flex flex-wrap justify-center gap-4 mb-6">
    //       {icons.map(({ href, Icon, label }) => (
    //         <a
    //           key={label}
    //           href={href}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           aria-label={label}
    //           className="bg-white text-gray-600 hover:text-black w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-black transition"
    //         >
    //           <Icon className="text-xl" />
    //         </a>
    //       ))}
    //     </div>

    //     {/* Navigation */}
    //     <div className=" bg-pink-400 grid grid-cols-2 sm:grid-cols-3">
    //       {navItems.map((item, index) => (
    //         <a
    //           key={index}
    //           href="#"
    //           className="text-xs sm:text-sm px-4 py-2 rounded-full border border-gray-200 bg-white/30 backdrop-blur-md hover:bg-white/60 transition-all duration-300 text-black"
    //         >
    //           {item}
    //         </a>
    //       ))}
    //     </div>

    //     {/* Copyright (Optional) */}
    //     <p className=" bg-emerald-600 mt-8 text-xs text-gray-400">&copy; 2025 Fiesta Visuals. All rights reserved.</p>
    //   </div>
    // </footer>
  );
};

export default Footer;
