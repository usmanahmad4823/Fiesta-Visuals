// src/App.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // If you use Tailwind

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      {/* <Home />
      <AboutUs />
      <Portfolio />
      <Testimonial/>
      <Services/>
      <Footer/> */}
     {/* <ProjectDetail/> */}
    </>
  );
};

export default App;
