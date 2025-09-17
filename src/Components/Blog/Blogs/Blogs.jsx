import React, { useEffect, useState } from 'react';
import { AllBlogs } from './../../../data/Blog';
import { Link } from 'react-router-dom';

// styles
import './Blogs.css'

const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;
    const totalPages = Math.ceil(AllBlogs.length / blogsPerPage);

    const indexOfLast = currentPage * blogsPerPage;
    const indexOfFirst = indexOfLast - blogsPerPage;
    const currentBlogs = AllBlogs.slice(indexOfFirst, indexOfLast);

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
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
        <div className='section py-20 text-center'>
            <div className='w-[80%] mx-auto py-0'>

                {/* Blogs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-0">
                    {currentBlogs.map(blog => (
                        <div key={blog.id} className="featureBlogCard flex flex-col justify-between shadow-md hover:shadow-xl duration-300 overflow-hidden">
                            <Link to={`/blog/${blog.id}`}>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                />
                                <div className="flex flex-col gap-2 p-4">
                                    <h2 className="text-lg px-4 text-center md:text-xl font-semibold text-gray-800">
                                        {blog.title}
                                    </h2>
                                </div>
                            </Link>
                            <div className="pb-10 flex items-center justify-center">
                                <Link
                                    to={`/blog/${blog.id}`}
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    className="text-center px-4 py-2 text-sm font-medium hover:underline transition-colors"
                                >
                                    Read more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex flex-wrap justify-center mt-8 items-center gap-2">

                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}

                        className={`pagination-btn px-3 py-1 text-sm sm:text-base ${currentPage === 1 ? 'disabled' : ''}`}
                    >
                        Previous
                    </button>

                    {/* First page + ellipsis */}
                    {paginationNumbers[0] > 1 && (
                        <>
                            <button
                                className="pagination-btn px-3 py-1 text-sm sm:text-base"
                                onClick={() => setCurrentPage(1)}
                            >
                                1
                            </button>
                            <span className="pagination-ellipsis">...</span>
                        </>
                    )}

                    {/* Page Numbers */}
                    {paginationNumbers.map((num) => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`pagination-btn px-3 py-1 text-sm sm:text-base ${currentPage === num ? 'active' : ''}`}
                        >
                            {num}
                        </button>
                    ))}

                    {/* Last page + ellipsis */}
                    {paginationNumbers[paginationNumbers.length - 1] < totalPages && (
                        <>
                            <span className="pagination-ellipsis">...</span>
                            <button
                                className="pagination-btn px-3 py-1 text-sm sm:text-base"
                                onClick={() => setCurrentPage(totalPages)}
                            >
                                {totalPages}
                            </button>
                        </>
                    )}

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`pagination-btn px-3 py-1 text-sm sm:text-base ${currentPage === totalPages ? 'disabled' : ''}`}
                    >
                        Next
                    </button>
                </div>


            </div>
        </div>
    );
};

export default Blogs
