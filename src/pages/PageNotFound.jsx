import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-8 text-center bg-[#fdf1e4]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#161616] mb-8">
        Sorry, the page you were looking for was not found.
      </h1>

      <Link
        to="/"
        className="w-full sm:w-auto bg-[#161616] text-white text-lg font-medium py-3 px-8 rounded-md hover:bg-[#333] transition-all duration-200"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
