import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/VansPage";
import VanDetails from "./pages/VanDetails";

import "./server";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vans" element={<VansPage />} />
        <Route path="/vans/:id" element={<VanDetails />} />
        {/* (:id) - router parameters/route params says that there'll be something there, that can be anything like 1,2,something */}
        {/* http://localhost:5173/vans/2 (or anything like) http://localhost:5173/vans/something%20else */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
