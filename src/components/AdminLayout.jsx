import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const navLinkStyles =
    "no-underline text-[#4D4D4D] px-5 hover:text-[#161616] hover:underline";
  const activeNavLinkStyles = "font-bold underline text-[#161616]";

  const getLinkClass = ({ isActive }) =>
    isActive ? `${navLinkStyles} ${activeNavLinkStyles}` : navLinkStyles;

  return (
    <>
      {/* nav links */}
      <nav className="bg-[#fdf1e4] h-[90px] font-['Inter'] flex items-center px-4">
        {/* <NavLink to="/admin" className={getLinkClass} end> */}
        {/* using relative path */}
        <NavLink to="." className={getLinkClass} end>
          Dashboard
        </NavLink>
        <NavLink to="income" className={getLinkClass}>
          Income
        </NavLink>
        <NavLink to="vans" className={getLinkClass}>
          Vans
        </NavLink>
        <NavLink to="reviews" className={getLinkClass}>
          Reviews
        </NavLink>
      </nav>
      
      {/* nested routes render here */}
      <Outlet />
    </>
  );
};

export default AdminLayout;
