// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Portfolio from "./components/Portfolio.jsx";
import ServicesSection from "./components/Services.jsx";
import Home from "./components/Home.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import { Route } from "react-router-dom";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="services" element={<ServicesSection />} />
      <Route path="projectView" element={<ProjectDetail />} />
      <Route path="contact" element={<Contact/> } />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
