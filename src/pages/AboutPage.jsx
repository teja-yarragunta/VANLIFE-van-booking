import React from "react";
import bgImg from "../assets/bg-img-about.png";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="w-full bg-[#fdf1e4] pb-6">
        {/* Hero image */}
        <img
          src={bgImg}
          alt="About VanLife"
          className="w-full h-100 object-cover"
        />

        {/* Page content */}
        <div className="px-6 sm:px-10 lg:px-20 text-[#161616] mb-14 ">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mt-8">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="leading-relaxed mt-4 text-base sm:text-lg max-w-2xl">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are re-certified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="leading-relaxed mt-3 text-base sm:text-lg max-w-2xl">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>

        {/* Call to action */}
        <div className="bg-[#FFCC8D] text-[#161616] rounded-md mx-6 sm:mx-10 lg:mx-20 px-6 sm:px-12 pb-8 m-9">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight pt-10 mb-6">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link
            to="/vans"
            className="inline-block bg-[#161616] text-white font-semibold rounded-lg px-8 py-3 no-underline transition-transform duration-150 ease-in-out hover:scale-105"
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
