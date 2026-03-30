import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/introduce/who-am-img.jpg";
import { introduce } from "../../../data/introduce";

const Introduce = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-teal-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>

          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 lg:p-10">
                {introduce.map((item, idx) => (
                  <div key={idx}>
                    <h2 className="text-3xl md:text-4xl font-bold italic text-gray-800 mb-4">
                      {item.greetings}
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      {item.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors group"
                      >
                        More About Me
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                ))}
              </div>

              <div className="relative md:mt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 to-transparent md:rounded-tr-2xl"></div>
                <img
                  src={image}
                  alt="Who am I"
                  className="w-full h-full object-cover md:rounded-tr-2xl md:rounded-bl-2xl"
                  style={{ minHeight: "280px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
