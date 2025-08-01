import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Portfolio", "Services", "Contact"];

  return (
    <nav className="fixed z-30 top-0 w-full px-[11vw] text-black">
      <div className=" position relative backdrop-blur-lg bg-white/20 border border-gray-300 shadow-xl rounded-b-3xl mx-auto px-2 py-1">
        {/* Desktop View */}
        <div className="hidden md:flex w-full items-center justify-between">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-[11px] px-6 py-2 rounded-full border border-gray-200 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 text-black"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-end py-1.5 ">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black  ">
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
                  href="#"
                  className="text-sm px-4 py-2 rounded-full border border-gray-200 bg-white/10 text-black hover:bg-white/20 transition-all duration-300 w-full text-center"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
