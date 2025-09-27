import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div
        className="w-full min-h-[calc(100vh-210px)] 
             flex flex-col justify-center items-start 
             px-6 sm:px-10 lg:px-20 
             text-white 
             bg-[url('./assets/home-hero.png')] 
             bg-no-repeat bg-center bg-cover 
             bg-blend-overlay bg-black/50"
      >
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-xl">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="vans"
          className="inline-block text-center no-underline bg-[#FF8C38] 
               w-full sm:w-auto mt-6 px-8 py-3 
               text-white font-bold rounded-md cursor-pointer 
               transition-transform duration-100 ease-in-out 
               hover:translate-x-[1px] hover:translate-y-[1px]"
        >
          Find your van
        </Link>
      </div>
    </>
  );
};

export default HomePage;
