import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/vans/VansPage";
import VanDetails from "./pages/vans/VanDetails";

import "./server"; // mock backend server

import Dashboard from "./pages/Admin/Dashboard";
import Income from "./pages/Admin/Income";
import Reviews from "./pages/Admin/Reviews";
import AdminLayout from "./components/AdminLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Layout don't need path, if no path it's gonna render Layout for all the children paths */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vans" element={<VansPage />} />
          <Route path="vans/:id" element={<VanDetails />} />
          {/* Admin */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        {/* (:id) - router parameters/route params says that there'll be something there, that can be anything like 1,2,something */}
        {/* http://localhost:5173/vans/2 (or anything like) http://localhost:5173/vans/something%20else */}
        {/* route component can only have another routes as children */}
      </Routes>
    </>
  );
};

export default App;
