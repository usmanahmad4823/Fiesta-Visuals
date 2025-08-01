// src/App.jsx
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // If you use Tailwind
import Card from "./components/Card";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import PageSubtitle from "./components/PageSubtitle";
import ProjectInfo from "./components/ProjectInfo";
import { div } from "framer-motion/client";
import SectionHeading from "./components/SectionHeading";
import Testimonial from "./components/Testimonial";
import ServiceCard from "./components/ServiceCard";
import ServicesSection from "./components/ServicesSection";
import BreakLine from "./components/BreakLine";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <Home />
      <AboutUs />
      <Portfolio />
      <Testimonial/>
      <ServicesSection/>
      <Footer/>
     
    </>
  );
};

export default App;
