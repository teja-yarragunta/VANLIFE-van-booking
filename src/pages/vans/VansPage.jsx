import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const VansPage = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const getTypeClasses = (type) => {
    const base =
      "inline-block px-5 py-1.5 text-sm font-medium rounded-md capitalize transition-colors";
    switch (type) {
      case "simple":
        return `${base} bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#E17654] hover:text-white`;
      case "rugged":
        return `${base} bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#115E59] hover:text-white`;
      case "luxury":
        return `${base} bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#161616] hover:text-white`;
      default:
        return base;
    }
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = filteredVans.map((van) => (
    <div
      key={van.id}
      className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <Link
        // to={`/vans/${van.id}`}
        // to={`${van.id}`}
        to={van.id}
        aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
      >
        <img
          src={van.imageUrl}
          alt={van.name}
          className="w-full h-48 sm:h-60 object-cover"
        />
        <div className="p-4 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg sm:text-xl font-semibold text-[#161616]">
              {van.name}
            </h3>
            <p className="text-base sm:text-lg font-bold text-[#161616]">
              Rs.{van.price}
              <span className="block text-sm font-normal">/day</span>
            </p>
          </div>
          <i className={getTypeClasses(van.type)}>{van.type}</i>
        </div>
      </Link>
    </div>
  ));

  const handleFilterChange = (type) => {
    if (type === typeFilter) {
      setSearchParams({}); // clear filter if clicked again
    } else {
      setSearchParams({ type });
    }
  };

  return (
    <>
      <div className="w-full px-6 sm:px-10 lg:px-20 py-10 bg-[#fdf1e4] min-h-screen">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161616] mb-8">
          Explore our van options 🥳
        </h1>
        {/* type filters */}
        <div className="flex flex-wrap gap-6 mb-10">
          {/* <Link to="?type=simple">Simple</Link>
          <Link to="?type=rugged">Rugged</Link>
          <Link to="?type=luxury">Luxury</Link>
          <Link to=".">Clear Filters</Link> */}
          {/* 2nd way */}
          {/* <button onClick={() => setSearchParams("?type=simple")}>
            Simple
          </button> */}
          {/* no need to '?' */}
          <button
            onClick={() => handleFilterChange("simple")}
            className={`h-[40px] px-[28px] py-[8px] text-lg font-medium rounded-md border-none transition-all duration-200 focus:outline-none cursor-pointer
          ${
            typeFilter === "simple"
              ? "bg-[#E17654] text-white"
              : "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#E17654] hover:text-[#FFEAD0]"
          }`}
          >
            Simple
          </button>

          <button
            onClick={() => handleFilterChange("rugged")}
            className={`h-[40px] px-[28px] py-[8px] text-lg font-medium rounded-md border-none transition-all duration-200 focus:outline-none cursor-pointer
          ${
            typeFilter === "rugged"
              ? "bg-[#115E59] text-white"
              : "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#115E59] hover:text-[#FFEAD0]"
          }`}
          >
            Rugged
          </button>

          <button
            onClick={() => handleFilterChange("luxury")}
            className={`h-[40px] px-[28px] py-[8px] text-lg font-medium rounded-md border-none transition-all duration-200 focus:outline-none cursor-pointer
          ${
            typeFilter === "luxury"
              ? "bg-[#161616] text-white"
              : "bg-[#FFEAD0] text-[#4D4D4D] hover:bg-[#161616] hover:text-[#FFEAD0]"
          }`}
          >
            Luxury
          </button>

          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className="ml-2 h-[40px] px-[28px] py-[8px] text-lg font-medium rounded-md border-none text-[#4D4D4D] bg-transparent underline focus:outline-none hover:text-black"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Grid layout: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vanElements}
        </div>
      </div>
    </>
  );
};

export default VansPage;
