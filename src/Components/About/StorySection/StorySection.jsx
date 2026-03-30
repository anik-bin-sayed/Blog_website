import React from "react";
import image from "../../../assets/about/about-hero-03.jpg";

const StorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            My{" "}
            <span className="text-teal-600 relative inline-block">
              Story
              <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-200 rounded-full -mb-2"></span>
            </span>{" "}
            so far
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-teal-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <img
                src={image}
                alt="Sophia's journey"
                className="relative rounded-2xl shadow-xl w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5 space-y-5 text-gray-600 leading-relaxed">
            <p className="text-base md:text-lg">
              Fueled by a lifelong fascination with storytelling, my marketing
              career began in a dynamic agency where I mastered the art of
              digital strategy and branding. Over the past decade, I’ve crafted
              narratives that connect and inspire, working with diverse clients
              across industries.
            </p>
            <p className="text-base md:text-lg">
              Beyond the office, my passion for exploration has taken me to 15
              countries, each enriching my perspective and creativity.
              Technology is my constant companion, always exploring new gadgets
              and innovations to enhance my work and life.
            </p>
            <p className="text-base md:text-lg">
              This blog is a reflection of my journey—a blend of travel tales,
              tech insights, and personal growth stories. Join me as I share the
              lessons learned and the dreams I’m pursuing, and let’s explore the
              world together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
