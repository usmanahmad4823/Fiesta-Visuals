import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = ["Home", "Portfolio", "Services", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed z-50 top-0 w-full px-[11vw] text-black"
    >
      <div className="relative backdrop-blur-lg bg-white/20 border border-gray-300 shadow-xl rounded-b-3xl mx-auto px-2 py-1">
        {/* Desktop View */}
        <div className="hidden md:flex w-full items-center justify-between">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`/${item}`}
              className="text-[11px] px-6 py-2 rounded-full border border-gray-200 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 text-black"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-end py-1.5 ">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 backdrop-blur-lg bg-white/20 border border-gray-200 shadow-inner rounded-xl px-4 py-4 flex flex-col items-center gap-3"
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`/${item}`}
                  className="text-sm px-4 py-2 rounded-full border border-gray-200 bg-white/10 text-black hover:bg-white/20 transition-all duration-300 w-full text-center"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
