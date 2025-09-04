import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { featureBlogs } from "../../data/FeatureBlogs";

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

const BlogDetails = () => {
    const { id } = useParams();
    const blog = featureBlogs.find(b => b.id.toString() === id);

    const navigate = useNavigate()

    const totalBlogs = featureBlogs.length;

    // 🔹 Previous button logic
    const handlePrevious = () => {
        const prevId = blog.id > 1 ? blog.id - 1 : totalBlogs;
        navigate(`/blog/${prevId}`);
    };

    const handleNext = () => {
        const nextId = blog.id < totalBlogs ? blog.id + 1 : 1;
        navigate(`/blog/${nextId}`);
    };

    return (
        <section className="section">
            <div className="w-[80%] mx-auto py-20">
                <div className="bg-white p-10">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[600px] object-cover rounded-lg mb-6"
                    />
                    <h1 className="text-3xl font-bold mb-4 py-4">{blog.title}</h1>

                    {
                        blog.description.map((para, index) => (
                            <p key={index} className="text-gray-700 text-justify leading-relaxed mb-4">
                                {para}
                            </p>
                        ))
                    }

                </div>
                <div className="flex justify-between mt-6">
                    <button onClick={handlePrevious} className="flex items-center gap-1 text-md font-sans cursor-pointer">
                        <span><BsArrowLeftShort /></span>
                        Previous</button>

                    <button onClick={handleNext} className="flex items-center gap-1 text-md font-sans cursor-pointer">

                        Next
                        <span><BsArrowRightShort /></span>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
