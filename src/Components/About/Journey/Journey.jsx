import React from 'react'

// styles
import './Journey.css'

// images
import image1 from '../../../assets/about/flavours-01.jpg'
import image2 from '../../../assets/about/flavours-02.jpg'

const Journey = () => {
    return (
        <div className="Journey py-20">
            <div className="w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row justify-evenly items-center gap-12 pt-10 pb-32">
                {/* text */}
                <div className="w-full text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-semibold leading-snug">
                        A Journey Through <br />
                        <span className="focused-text">Flavours</span>
                    </h1>
                    <div className="w-full flex flex-col gap-4 pt-8 text-sm md:text-base mx-auto lg:mx-0">
                        <p>
                            The kitchen is my creative sanctuary. Whether I’m experimenting
                            with new recipes or recreating family favorites, cooking allows
                            me to express my creativity and share love through food.
                        </p>
                        <p>
                            These passions are more than just hobbies—they’re integral to who
                            I am and what I bring to the table. Through this blog, I hope to
                            inspire you to explore your own interests and find joy in the
                            journey.
                        </p>
                    </div>
                </div>

                {/* images */}
                {/* images */}
                <div className="relative flex justify-center mt-30 md:mt-30 lg:mt-20">
                    {/* main image */}
                    <img
                        src={image2}
                        alt="image2"
                        className="w-[900px] h-auto"
                    />

                    {/* overlay image */}
                    <div className="absolute top-[-10%] left-0 md:left-0 lg:right-[-10%] transform -translate-y-[65%] md:-translate-y-[20%] lg:-translate-y-[50%]">
                        <img
                            src={image1}
                            alt="image1"
                            className="w-[150px] md:w-[180px] lg:w-[200px] object-cover"
                        />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Journey
