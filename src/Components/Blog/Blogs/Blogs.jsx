import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllBlogs } from "./../../../data/Blog";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const totalPages = Math.ceil(AllBlogs.length / blogsPerPage);

  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = AllBlogs.slice(indexOfFirst, indexOfLast);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const getPaginationNumbers = (totalPages, currentPage, maxButtons = 5) => {
    let pages = [];
    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
      let end = start + maxButtons - 1;
      if (end > totalPages) {
        end = totalPages;
        start = end - maxButtons + 1;
      }
      for (let i = start; i <= end; i++) pages.push(i);
    }
    return pages;
  };

  const paginationNumbers = getPaginationNumbers(totalPages, currentPage, 2);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            All{" "}
            <span className="text-teal-600 relative inline-block">
              Blogs
              <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-200 rounded-full -mb-2"></span>
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Explore all my articles, stories, and insights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {currentBlogs.map((blog) => (
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
                  Discover inspiring stories and valuable insights in this post.
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

        {/* Pagination */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-12 md:mt-16">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm hover:shadow"
            }`}
          >
            Previous
          </button>

          {paginationNumbers[0] > 1 && (
            <>
              <button
                onClick={() => setCurrentPage(1)}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 shadow-sm"
              >
                1
              </button>
              <span className="px-2 text-gray-400">...</span>
            </>
          )}

          {paginationNumbers.map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentPage === num
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm"
              }`}
            >
              {num}
            </button>
          ))}

          {paginationNumbers[paginationNumbers.length - 1] < totalPages && (
            <>
              <span className="px-2 text-gray-400">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 shadow-sm"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm hover:shadow"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
