import React from "react";
import { Link } from "react-router-dom";
import { passion } from "../../../data/Passion";

const Passion = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Explore My{" "}
            <span className="text-teal-600 relative inline-block">
              Passions
              <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-200 rounded-full -mb-2"></span>
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            What drives me to create and explore
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {passion.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-center"
            >
              <div className="flex justify-center">
                <div className="absolute -top-8 inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <Icon className="text-3xl text-teal-600 group-hover:text-teal-700 transition-colors" />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-teal-200 rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 text-white font-medium rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            View All Blogs
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
    </section>
  );
};

export default Passion;
