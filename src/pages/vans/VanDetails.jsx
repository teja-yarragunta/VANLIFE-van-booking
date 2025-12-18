import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../utils/api";

export const loader = ({ params }) => {
  return getVans(params.id);
};

const VanDetails = () => {
  const params = useParams();
  // console.log(params);

  // const [vanDetails, setVanDetails] = useState(null);

  const location = useLocation();
  const vanDetails = useLoaderData();
  // console.log(location);

  // useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVanDetails(data.vans));
  // }, [params.id]);

  // const search = location.state && location.state.search || ""
  const search = location.state?.search || ""; // optional chaining
  const backToWhat = location.state?.type || "all";

  return (
    <>
      <Link
        // to=".." // one level up
        to={`..${search}`}
        relative="path"
        // one level up to the path, not to the routes hierarchy
        className="block w-full bg-[#fdf1e4] py-4 px-6 text-[#161616] font-semibold hover:underline transition-colors duration-200"
      >
        &larr;{" "}
        <span className="text-base font-medium tracking-wide">
          Back to {backToWhat} vans
        </span>
      </Link>

      <div className="w-full px-6 sm:px-10 lg:px-20 py-10">
        <div className="flex flex-col text-[#161616]">
          {/* Van image */}
          <img
            src={vanDetails.imageUrl}
            alt={vanDetails.name}
            className="rounded-md my-12 w-full max-h-[400px] object-contain"
          />

          {/* Van type badge */}
          <i
            className={`inline-block self-start px-6 py-1.5 text-sm font-medium rounded-md capitalize 
              ${
                vanDetails.type === "simple"
                  ? "bg-[#E17654] text-white"
                  : vanDetails.type === "rugged"
                  ? "bg-[#115E59] text-white"
                  : vanDetails.type === "luxury"
                  ? "bg-[#161616] text-white"
                  : "bg-[#FFEAD0] text-[#4D4D4D]"
              }`}
          >
            {vanDetails.type}
          </i>

          {/* Van title */}
          <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-2">
            {vanDetails.name}
          </h2>

          {/* Price */}
          <p className="text-lg mb-3">
            <span className="font-bold text-xl">Rs.{vanDetails.price}</span>
            /day
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            {vanDetails.description}
          </p>

          {/* CTA button */}
          <button className="bg-[#FF8C38] text-white text-lg font-semibold px-6 py-3 rounded-md transition-transform duration-150 hover:scale-105">
            Rent this Van
          </button>
        </div>
      </div>
    </>
  );
};

export default VanDetails;
