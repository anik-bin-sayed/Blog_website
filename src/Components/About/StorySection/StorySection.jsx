import React from 'react'

// images
import image from '../../../assets/about/about-hero-03.jpg'

// styles
import './StorySection.css'

const StorySection = () => {
    return (
        <div className='section'>
            <div className=" StorySection w-[90%] md:w-[80%] mx-auto flex flex-col items-center gap-10 pt-20">
                {/* Title */}
                <div>
                    <h1 className="text-6xl italic font-semibold text-center">
                        My <span className="focused-text">Story</span> so far
                    </h1>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 w-full py-20">
                    {/* Image section */}
                    <div className="w-full lg:w-[40%] flex justify-center">
                        <img
                            src={image}
                            alt="About"
                            className="shadow-lg object-cover w-full h-auto"
                        />
                    </div>

                    {/* Text section */}
                    <div className="w-full lg:w-[55%] space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            Fueled by a lifelong fascination with storytelling, my marketing career began in a dynamic agency where I mastered the art of digital strategy and branding. Over the past decade, I’ve crafted narratives that connect and inspire, working with diverse clients across industries.
                        </p>

                        <p>
                            Beyond the office, my passion for exploration has taken me to 15 countries, each enriching my perspective and creativity. Technology is my constant companion, always exploring new gadgets and innovations to enhance my work and life.
                        </p>

                        <p>
                            This blog is a reflection of my journey—a blend of travel tales, tech insights, and personal growth stories. Join me as I share the lessons learned and the dreams I’m pursuing, and let’s explore the world together.
                        </p>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default StorySection