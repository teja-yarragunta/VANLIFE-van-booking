import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navLinkStyles =
    "no-underline text-[#4D4D4D] font-semibold px-5 py-[5px] hover:text-[#161616] hover:underline hover:text-2xl";

  return (
    <header className="bg-[#fdf1e4] h-[130px] font-['Inter'] flex items-center py-[10px] px-6">
      {/* Link allows us to move to different routes without page refresh */}
      <Link
        className="text-black mr-auto uppercase font-extrabold text-[35px]"
        to={"/"}
      >
        #vanlife
      </Link>
      {/* nav links */}
      <nav>
        <Link className={navLinkStyles} to="/admin">
          Admin
        </Link>
        <Link className={navLinkStyles} to="/about">
          About
        </Link>
        <Link className={navLinkStyles} to="/vans">
          Vans
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
