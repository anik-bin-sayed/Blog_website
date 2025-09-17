import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { featureBlogs } from "../../data/FeatureBlogs";
import { latestBlog } from "../../data/LatestBlog";
import { AllBlogs } from "../../data/Blog";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import RelatedBlogs from "./RelatedBlogs";
import CommentSection from "./CommentSection";
import "./BlogDetails.css";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Combine all blogs and remove duplicate IDs
    const blogs = [...featureBlogs, ...latestBlog, ...AllBlogs];
    const uniqueBlogs = Array.from(new Map(blogs.map(b => [b.id, b])).values())
        .sort((a, b) => a.id - b.id); // sort by id

    // Find current blog
    const currentIndex = uniqueBlogs.findIndex(b => b.id.toString() === id);
    const blog = uniqueBlogs[currentIndex];

    // Handle blog not found
    if (!blog) {
        return (
            <div className="text-center mt-20 text-red-500">
                Blog not found!
            </div>
        );
    }

    // Related blogs: exclude current and pick 3 random
    const relatedBlogs = uniqueBlogs
        .filter(b => b.id.toString() !== id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    // Next / Previous navigation
    const handlePrevious = () => {
        const prevIndex = currentIndex === 0 ? uniqueBlogs.length - 1 : currentIndex - 1;
        const prevBlog = uniqueBlogs[prevIndex];
        navigate(`/blog/${prevBlog.id}`);
    };

    const handleNext = () => {
        const nextIndex = currentIndex === uniqueBlogs.length - 1 ? 0 : currentIndex + 1;
        const nextBlog = uniqueBlogs[nextIndex];
        navigate(`/blog/${nextBlog.id}`);
    };

    return (
        <section className="section">
            <div className="w-full lg:w-[80%] mx-auto py-20">
                <div className="blog p-10">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[600px] object-cover rounded-lg mb-6"
                    />
                    <h1 className="text-3xl font-bold mb-4 py-4">{blog.title}</h1>

                    {blog.description.map((para, index) => (
                        <p key={index} className="text-gray-700 text-justify leading-relaxed mb-4">
                            {para}
                        </p>
                    ))}
                </div>

                {/* Next / Previous Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={handlePrevious}
                        className="flex items-center gap-1 text-md font-sans cursor-pointer hover:text-blue-500 transition"
                    >
                        <BsArrowLeftShort size={20} /> Previous
                    </button>

                    <button
                        onClick={handleNext}
                        className="flex items-center gap-1 text-md font-sans cursor-pointer hover:text-blue-500 transition"
                    >
                        Next <BsArrowRightShort size={20} />
                    </button>
                </div>

                {/* Related Blogs */}
                <div className="mt-10 related-blogs p-10">
                    <h2 className="text-2xl font-semibold mb-6">Related Blogs</h2>
                    <RelatedBlogs relatedBlogs={relatedBlogs} />
                </div>

                {/* Comment Section */}
                <div className="mt-10 comment-section p-10 border-t border-gray-300">
                    <h2 className="text-2xl font-semibold mb-6">Leave a Comment</h2>
                    <CommentSection blogId={blog.id} />
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
