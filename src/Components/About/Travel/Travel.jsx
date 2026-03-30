import React from "react";

// style
import "./Travel.css";

// Images
import image from "../../../assets/about/wanderlust.jpg";

const Travel = () => {
  return (
    <div className="travel-container bg-[#fff] py-10">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between relative">
        <div className="relative md:w-1/2 w-full mb-10 md:mb-0 group">
          <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-full h-full border border-gray-300 rounded z-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>

          <div className="absolute inset-0 bg-gradient-to-tr from-teal-200/20 to-purple-200/20 rounded blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative z-10 w-full h-[250px] md:h-[320px] rounded overflow-hidden shadow">
            <img
              src={image}
              alt="Travel"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-start justify-start px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold italic mb-6 leading-snug">
            Wanderlust: <span className="focused-text">Why I Travel</span>
          </h1>
          <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
            Traveling is more than just a hobby—it’s a way of life that shapes
            my perspective and enriches my soul. Each journey offers a new
            adventure, a chance to step out of my comfort zone and immerse
            myself in diverse cultures and landscapes.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            I travel to see the world through different eyes, to learn from the
            stories and traditions of others, and to appreciate the beauty and
            diversity that our planet offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Travel;
