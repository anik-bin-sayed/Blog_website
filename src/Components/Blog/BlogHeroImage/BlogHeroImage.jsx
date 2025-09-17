import React from 'react'

// images
import bg from '../../../assets/blog/blog-hero.jpg'

const BlogHeroImage = () => {
    return (
        <div className="relative h-[30rem] w-full">
            {/* Background Image */}
            <div
                className="h-full w-full bg-center bg-auto bg-scroll bg-repeat"
                style={{ backgroundImage: `url(${bg})` }}
            ></div>

            {/* Black Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-64"></div>

            {/* Text on top */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                    Adventures, Stories & Insights <br className='hidden lg:flex' /> Await
                </h1>
                <p className='text-white py-10 text-base'>Welcome to the heart of my blog, where stories of exploration, innovation, and personal growth come to life.</p>
            </div>
        </div>
    )
}

export default BlogHeroImage
