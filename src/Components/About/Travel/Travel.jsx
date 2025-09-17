import React from 'react'

// style
import './Travel.css'

// Images
import image from '../../../assets/about/wanderlust.jpg'

const Travel = () => {
    return (
        <div className="travel-container bg-[#d2ccb6] py-10">
            <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between relative">

                {/* Left Box - Image */}
                <div className="relative md:w-1/2 w-full mb-10 md:mb-0">
                    {/* Background box */}
                    <div className="absolute -top-6 -left-6 md:-top-24 md:-left-12 w-full h-[400px] md:h-[700px] border border-gray-400 z-0 rounded-lg"></div>

                    {/* Image box */}
                    <div className="relative z-10 w-full h-[400px] md:h-[700px] rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={image}
                            alt="Travel"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Right Box - Text */}
                <div className="md:w-1/2 w-full flex flex-col items-start justify-start px-4 md:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold italic mb-6 leading-snug">
                        Wanderlust: <span className="focused-text">Why I Travel</span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                        Traveling is more than just a hobby—it’s a way of life that shapes my
                        perspective and enriches my soul. Each journey offers a new adventure, a
                        chance to step out of my comfort zone and immerse myself in diverse
                        cultures and landscapes.
                    </p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        I travel to see the world through different eyes, to learn from the stories
                        and traditions of others, and to appreciate the beauty and diversity that
                        our planet offers.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Travel
