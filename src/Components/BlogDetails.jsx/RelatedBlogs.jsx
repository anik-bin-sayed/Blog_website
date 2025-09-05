import React from 'react'
import { Link } from 'react-router-dom'

const RelatedBlogs = ({ relatedBlogs }) => {
    console.log(relatedBlogs);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {
                relatedBlogs && relatedBlogs.map(blog => (
                    <div
                        key={blog.id}
                        className="featureBlogCard flex flex-col justify-between shadow-md hover:shadow-xl duration-300 overflow-hidden"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="flex flex-col gap-2 p-4">
                            <h2 className="text-lg px-4 text-center md:text-xl font-semibold text-gray-800">{blog.title}</h2>
                        </div>
                        <div className="pb-10 flex items-center justify-center">
                            <Link
                                to={`/blog/${blog.id}`}
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="text-center px-4 py-2 text-sm font-medium transition-colors"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RelatedBlogs