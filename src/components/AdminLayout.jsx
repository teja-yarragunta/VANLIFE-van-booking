import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const navLinkStyles =
    "no-underline text-[#4D4D4D] px-5 hover:text-[#161616] hover:underline";

  return (
    <>
      {/* nav links */}
      <nav className="bg-[#fdf1e4] h-[90px] font-['Inter'] flex items-center px-4">
        <Link className={navLinkStyles} to="/admin">
          Dashboard
        </Link>
        <Link className={navLinkStyles} to="/admin/income">
          Income
        </Link>
        <Link className={navLinkStyles} to="/admin/reviews">
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default AdminLayout;
