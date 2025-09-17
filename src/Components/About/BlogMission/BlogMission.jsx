import React from 'react'

// styles
import './BlogMission.css'

// image 
import image from '../../../assets/about/BlogMissionImage.png'
import { Link } from 'react-router-dom'

const BlogMission = () => {
    return (
        <div className="blog-mission flex flex-col lg:flex-row overflow-hidden">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                <img
                    src={image}
                    alt="Blog Mission"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col px-6 md:px-10 lg:px-16 py-10 space-y-6">
                <h1 className="text-4xl md:text-5xl font-semibold italic leading-snug">
                    My Blog’s <span className="focused-text">Mission</span>
                </h1>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        At the heart of this blog is a simple mission: to inspire, educate, and connect. As a marketing professional with a passion for travel, technology, and wellness, I aim to share valuable insights and personal stories that resonate with you.
                    </p>
                    <p>
                        Join me in this journey of discovery as we explore the world, embrace change, and strive for a balanced, fulfilling life.
                    </p>
                </div>

                <button className="blog_btn text-md self-start px-6 py-3 italic cursor-pointer uppercase">
                    Subscribe Now
                </button>
            </div>


        </div>

    )
}

export default BlogMission
