import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
  const params = useParams();
  // console.log(params);

  const [vanDetails, setVanDetails] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data.vans));
  }, [params.id]);

  return (
    <div className="w-full px-6 sm:px-10 lg:px-20 py-10">
      {vanDetails ? (
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
            <span className="font-bold text-xl">Rs.{vanDetails.price}</span>/day
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
      ) : (
        <h2 className="text-xl font-semibold">Loading...</h2>
      )}
    </div>
  );
};

export default VanDetails;
