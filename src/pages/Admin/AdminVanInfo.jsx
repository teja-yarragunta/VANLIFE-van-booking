import React from "react";
import { useOutletContext } from "react-router-dom";

const AdminVanInfo = () => {
  const { currentVan } = useOutletContext();
  if (!currentVan) {
    return <h2 className="text-center text-lg font-medium">Loading...</h2>;
  }

  return (
    <section className="space-y-2 mx-25 my-15">
      <h4 className="font-bold text-[16px] leading-[21px]">
        Name: <span className="font-medium">{currentVan.name}</span>
      </h4>
      <h4 className="font-bold text-[16px] leading-[21px]">
        Category: <span className="font-medium">{currentVan.type}</span>
      </h4>
      <h4 className="font-bold text-[16px] leading-[21px]">
        Description:{" "}
        <span className="font-medium">{currentVan.description}</span>
      </h4>
      <h4 className="font-bold text-[16px] leading-[21px]">
        Visibility: <span className="font-medium">Public</span>
      </h4>
    </section>
  );
};

export default AdminVanInfo;
