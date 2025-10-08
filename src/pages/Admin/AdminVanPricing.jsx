import React from "react";
import { useOutletContext } from "react-router-dom";

const AdminVanPricing = () => {
  const { currentVan } = useOutletContext();
  if (!currentVan) {
    return <h2 className="text-center text-xl font-semibold">Loading...</h2>;
  }

  return (
    <h3 className="text-[32px] font-semibold text-[#161616] mx-25 my-10">
      ${currentVan.price}
      <span className="text-[18px] text-[#4D4D4D] font-medium">/day</span>
    </h3>
  );
};

export default AdminVanPricing;
