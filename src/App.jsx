import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/VansPage";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./server";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vans" element={<VansPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
