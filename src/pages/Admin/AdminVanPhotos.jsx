import React from "react";
import { useOutletContext } from "react-router-dom";

const AdminVanPhotos = () => {
  const { currentVan } = useOutletContext();
  if (!currentVan) {
    return <h2 className="text-center text-xl font-semibold">Loading...</h2>;
  }

  return (
    <img
      src={currentVan.imageUrl}
      alt={currentVan.name}
      className="h-[260px] rounded-[10px] shadow-md hover:scale-105 transition-transform duration-300 mx-25 my-10"
    />
  );
};

export default AdminVanPhotos;
