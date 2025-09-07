import React from 'react'
import './FeatureBlog.css'
import { featureBlogs } from '../../../data/FeatureBlogs'
import { Link } from 'react-router-dom'

const FeatureBlog = () => {
  return (
    <section className="feature_section">
      <div className='w-[80%] mx-auto py-20'>
        <div className="socialIconsTitle w-full flex items-center justify-center mb-10 lg:mb-0">
          <h1 className="feature_title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold italic leading-tight text-gray-800 text-center lg:text-left">
            My feature <span>Blogs</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {featureBlogs && featureBlogs.map(blog => (
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

      </div>

    </section >
  )
}

export default FeatureBlog