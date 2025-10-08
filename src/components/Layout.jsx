import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    // make the whole app a column with min height of the screen so footer can stick to bottom
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* main area grows to fill available space */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
