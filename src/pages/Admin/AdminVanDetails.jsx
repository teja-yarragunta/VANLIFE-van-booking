import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { getAdminVans } from "../../utils/api";
import { requireAuth } from "../../utils/authCheck";

export const loader = async ({ params }) => {
  await requireAuth();
  return getAdminVans(params.id);
};

const AdminVanDetails = () => {
  const getTypeClasses = (type) => {
    const base =
      "inline-block px-5 py-1.5 text-sm font-medium rounded-md capitalize transition-colors";
    switch (type) {
      case "simple":
        return `${base} bg-[#E17654] text-white hover:text-white`;
      case "rugged":
        return `${base} bg-[#115E59] text-white hover:text-white`;
      case "luxury":
        return `${base} bg-[#161616] text-white hover:text-white`;
      default:
        return base;
    }
  };

  const navLinkStyles =
    "no-underline text-[#4D4D4D] px-5 hover:text-[#161616] hover:underline";
  const activeNavLinkStyles = "font-bold underline text-[#161616]";

  const getLinkClass = ({ isActive }) =>
    isActive ? `${navLinkStyles} ${activeNavLinkStyles}` : navLinkStyles;

  // const { id } = useParams();
  // const [currentVan, setCurrentVan] = useState(null);

  // useEffect(() => {
  //   fetch(`/api/admin/vans/${id}`)
  //     .then((res) => res.json())
  //     // .then((data) => console.log(data.vans));
  //     .then((data) => setCurrentVan(data.vans));
  // }, [id]);

  const currentVan = useLoaderData();

  return (
    <section>
      <Link
        to=".." // one level up
        relative="path"
        // one level up to the path, not to the routes hierarchy
        className="block w-full bg-[#fdf1e4] py-4 px-6 text-[#161616] font-semibold hover:underline transition-colors duration-200"
      >
        &larr;{" "}
        <span className="text-base font-medium tracking-wide">
          Back to all vans
        </span>
      </Link>

      <div className="bg-white p-6 my-[30px] mx-[26px]">
        {currentVan ? (
          <div className="flex items-center ml-12 mr-12">
            <img
              src={currentVan.imageUrl}
              alt={currentVan.name}
              className="h-[260px] rounded-md mr-5"
            />
            <div className="text-center">
              <i className={getTypeClasses(currentVan.type)}>
                {currentVan.type}
              </i>
              <h3 className="mt-6 mb-1 text-[26px] font-bold">
                {currentVan.name}
              </h3>
              <h4 className="text-[20px] m-0">Rs.{currentVan.price}/day</h4>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      {/* nav for info, pricing, photos */}
      <nav className="flex font-['Inter'] my-[30px] mx-[75px]">
        <NavLink to="." className={getLinkClass} end>
          Details
        </NavLink>
        <NavLink to="pricing" className={getLinkClass}>
          Pricing
        </NavLink>
        <NavLink to="photos" className={getLinkClass}>
          Photos
        </NavLink>
      </nav>

      {/* for info, photo and pricing */}
      <Outlet context={{ currentVan }} />
    </section>
  );
};

export default AdminVanDetails;
