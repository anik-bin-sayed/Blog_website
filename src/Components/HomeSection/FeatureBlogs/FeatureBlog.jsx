import React from "react";
import { Link } from "react-router-dom";
import { featureBlogs } from "../../../data/FeatureBlogs";

const FeatureBlog = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            My Feature{" "}
            <span className="text-teal-600 relative inline-block">
              Blogs
              <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-200 rounded-full -mb-2"></span>
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Handpicked articles to inspire your journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featureBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <Link
                to={`/blog/${blog.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>

              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 hover:text-teal-600 transition-colors">
                  <Link
                    to={`/blog/${blog.id}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  Discover insights and stories that will inspire your journey.
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/blog/${blog.id}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors group/link"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlog;
