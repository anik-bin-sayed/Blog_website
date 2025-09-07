import React from 'react'

// css 
import './LatestBlog.css'
import { latestBlog } from '../../../data/LatestBlog'
import { Link } from 'react-router-dom'

const LatestBlog = () => {
    return (
        <div className='latest_blog_section py-20 text-center'>
            <div className='w-[80%] mx-auto py-10'>
                <h1 className=' font-semibold text-4xl'>Latest
                    <span className='italic'> Blogs</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
                    {latestBlog && latestBlog.map(blog => (
                        <div
                            key={blog.id}
                            className="featureBlogCard flex flex-col justify-between shadow-md hover:shadow-xl duration-300 overflow-hidden"
                        >
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

                <Link to="/blogs" className='passion_btn uppercase font-semibold inline-block mt-10 px-6 py-2 rounded-full transition duration-300'>
                    View All Blog
                </Link>
            </div>
        </div>




    )
}

export default LatestBlog