import React from "react";
import { HiSun } from "react-icons/hi";
import {
  FaGlobe,
  FaChartLine,
  FaPenFancy,
  FaBookOpen,
  FaLanguage,
} from "react-icons/fa";
import image1 from "../../../assets/about/about-hero-01.jpg";
import image2 from "../../../assets/about/about-hero-02.jpg";

// Custom blob animation (adds a soft, floating background)
const style = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

const About = () => {
  const stats = [
    { value: "15", label: "Countries Explored", icon: FaGlobe },
    { value: "10+", label: "Years in Marketing", icon: FaChartLine },
    { value: "200", label: "Blog Posts", icon: FaPenFancy },
    { value: "30", label: "Books / Year", icon: FaBookOpen },
    { value: "3", label: "Languages", icon: FaLanguage },
  ];

  return (
    <>
      <style>{style}</style>

      <section className="relative bg-gradient-to-br from-gray-50 via-white to-teal-50/30 overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-teal-700 px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-teal-100 transition-all hover:shadow-md">
            <HiSun className="text-xl" />
            <span>About Me</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            From Marketing Maven to
            <span className="text-teal-600 block mt-2">World Explorer</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Hi there! I’m{" "}
              <span className="text-teal-600 font-semibold italic">
                Sophia Ellis
              </span>
              , a marketing professional with a zest for life and an insatiable
              curiosity for the world. This blog is where my love for
              storytelling, discovery, and personal growth converge.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12 md:mt-16">
            <div className="relative group w-full max-w-xs md:max-w-sm">
              <div className="absolute -inset-1 bg-teal-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <img
                src={image1}
                alt="Travel adventure"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group w-full max-w-xs md:max-w-sm md:-mt-10 z-0">
              <div className="absolute -inset-1 bg-purple-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <img
                src={image2}
                alt="Marketing journey"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-2xl" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-20 bg-teal-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-teal-100">
            <svg
              className="w-12 h-12 text-teal-300 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl font-light italic text-gray-700 leading-relaxed">
              “Travel makes one modest. You see what a tiny place you occupy in
              the world.”
            </p>
            <p className="mt-4 text-teal-600 font-semibold">
              — Gustave Flaubert
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
