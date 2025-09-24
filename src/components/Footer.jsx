import React from "react";

const Footer = () => {
  return (
    <footer className="h-[80px] w-full bg-[#2b2a2a] text-white flex items-center justify-center px-6">
      <p className="text-sm sm:text-base font-medium">
        Ⓒ {new Date().getFullYear()} #VanLife. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
