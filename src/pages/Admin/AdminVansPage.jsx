import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getAdminVans } from "../../utils/api";
import { requireAuth } from "../../utils/authCheck";

export const loader = async () => {
  await requireAuth();
  return getAdminVans();
};

const AdminVansPage = () => {
  // const [vans, setVans] = useState([]);

  // useEffect(() => {
  //   fetch("/api/admin/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);

  const vans = useLoaderData();

  const vanElements = vans.map((van) => (
    <div
      key={van.id}
      className="flex bg-white rounded-lg shadow-sm overflow-hidden w-full mb-6"
    >
      <Link
        to={`${van.id}`}
        aria-label={`View details for ${van.name}, 
                             priced at ${van.price} per day`}
        className="flex w-full items-center"
      >
        {/* Image on left */}
        <img
          src={van.imageUrl}
          alt={van.name}
          className="w-40 sm:w-56 h-40 sm:h-56 object-cover flex-shrink-0"
        />

        {/* Name + Price centered beside image */}
        <div className="flex justify-between items-center w-full px-6">
          <h3 className="text-lg sm:text-xl font-semibold text-[#161616]">
            {van.name}
          </h3>
          <p className="text-base sm:text-lg font-bold text-[#161616]">
            Rs.{van.price}
            <span className="block text-sm font-normal">/day</span>
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="w-full px-6 sm:px-10 lg:px-20 py-10 bg-[#fdf1e4] min-h-screen">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161616] mb-8">
        Your listed vans
      </h1>

      {/* List layout */}
      <div className="flex flex-col">{vanElements}</div>
    </div>
  );
};

export default AdminVansPage;
