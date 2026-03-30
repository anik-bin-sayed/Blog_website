import React from "react";
import { Link } from "react-router-dom";
import { HiSun } from "react-icons/hi";
import { FaWifi, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import image1 from "../../../assets/Hero_Img/hero-img-01.jpg";
import image2 from "../../../assets/Hero_Img/hero-img-02.jpg";
import image3 from "../../../assets/Hero_Img/hero-img-03.jpg";

const HeroSection = () => {
  const stats = [
    { icon: <FaInstagram />, count: "12K+" },
    { icon: <FaWifi />, count: "8K+" },
    { icon: <FaPinterestP />, count: "5K+" },
    { icon: <FaLinkedinIn />, count: "3K+" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <HiSun className="text-xl" />
            <span>I'm Sophia!</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800 leading-tight">
            Welcome to My Journey of
            <span className="text-teal-600 block mt-2">
              Discovery and Growth
            </span>
          </h1>
          <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A marketing professional passionate about exploring the world,
            embracing technology, enhancing personal growth, and nurturing
            wellness.
          </p>
          <div className="mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 text-white font-medium rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Inspired
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[image1, image2, image3].map((img, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={img}
                alt={`Hero Image ${idx + 1}`}
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold italic text-gray-800">
            Over 30K people in my{" "}
            <span className="text-teal-600 font-bold not-italic">Network</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="text-3xl md:text-4xl text-teal-600 mb-2 group-hover:text-teal-700 transition-colors">
                  {stat.icon}
                </div>
                <span className="text-xl sm:text-2xl font-semibold text-gray-700">
                  {stat.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
