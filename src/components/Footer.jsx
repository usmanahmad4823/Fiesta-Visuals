import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaXing,
} from "react-icons/fa";

const Footer = () => {
  const navItems = ["Home", "Portfolio", "Contact"];
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

    // // try this background style in the footer  
    // className="w-screen h-screen"
    //   style={{
    //     backgroundImage: `
    //       radial-gradient(circle at 100% 100%, #dd23bb40, #0000 40%),
    //       radial-gradient(circle at 0 100%, #2d62ff4d, #0000 60%)`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundColor: "#000", // optional if you want black base
    //   }}
    
    <footer className=" relative z-40 rounded-t-4xl bg-[#F7F7F7] w-full h-full flex flex-col items-center justify-center pt-[5rem]">
      <div className="flex flex-col items-center justify-center footerTop ">
        <h1 className="  font-bold pb-2 text-4xl">Fiesta Visuals</h1>
        <p className=" text-gray-600 text-sm ">
          Design That Defines Brands
        </p>
      </div>
      <div >
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
      </div>

<div className="flex flex-col md:flex-row items-center justify-between w-[70%] pt-4 pb-8">

        {navItems.map((item, index) => (
          <a
            key={index}
            href={`/${item}`}
            className=" text-[11px] mt-8  px-6 py-2 rounded-full border border-gray-200 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 text-black"
          >
            {item}
          </a>
        ))}
      </div>

      <div className=" licenses">
           <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2 px-4 py-6 text-[10px] text-gray-600 border-t border-gray-200">
      {/* Left text */}
      <div className="footer_credit-text text-center md:text-left">
        © 2025 Fiesta Visuals. All rights reserved.
      </div>

      {/* Right links */}
      <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
        <a
          href="/template-info/style-guide"
          className="bg-[#FFFFFF] underline footer_legal-link hover:underline transition"
        >
          Style Guide
        </a>
        <a
          href="/template-info/licenses"
          className="bg-[#FFFFFF]underline footer_legal-link hover:underline transition"
        >
          Licenses
        </a>
        <a
          href="/template-info/changelog"
          className="bg-[#FFFFFF]underline footer_legal-link hover:underline transition"
        >
          Changelog
        </a>
      </div>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
