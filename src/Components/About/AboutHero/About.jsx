import React from 'react'
import { HiSun } from 'react-icons/hi'

// image
import image1 from '../../../assets/about/about-hero-01.jpg'
import image2 from '../../../assets/about/about-hero-02.jpg'

// css
import './About.css'

const About = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="about_section min-h-screen">
                <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center text-center py-16 md:py-24 space-y-10">

                    {/* Title */}
                    <div className="title flex items-center gap-4 text-xl uppercase tracking-wider text-thin ">
                        <span className="text-2xl"><HiSun /></span>
                        <p className="font-medium text-[18px]">About Me</p>
                    </div>

                    {/* About Content */}
                    <div className="max-w-3xl space-y-6">
                        <h1 className="home_title text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium leading-tight">
                            From Marketing Maven to <br />
                            World Explorer
                        </h1>

                        <p className="block text-gray-600 text-base [word-spacing:4px] text-center">
                            Hi there! I’m <span className="des_name font-semibold italic">Sophia Ellis</span>,
                            a marketing professional with a zest for life and an insatiable curiosity for the world.
                            This blog is where my love for storytelling, discovery, and personal growth converge.
                            Here, I aim to share my journey with you.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-10">
                        <div>
                            <img src={image1} alt="image1" />
                        </div>
                        <div>
                            <img src={image2} alt="image2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="second_hero-section py-20">
                <div className="w-[90%] md:w-[80%] mx-auto">
                    {/* content */}
                    <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-end gap-6">

                        <div className="content flex flex-col items-center md:items-start p-4 italic border-b md:border-b-0 md:border-r text-center md:text-left">
                            <p className="text-3xl font-bold">15</p>
                            <p>Countries Explored</p>
                        </div>

                        <div className="content flex flex-col items-center md:items-start p-4 italic border-b md:border-b-0 md:border-r text-center md:text-left">
                            <p className="text-3xl font-bold">10+</p>
                            <p>Years in Marketing</p>
                        </div>

                        <div className="content flex flex-col items-center md:items-start p-4 italic border-b md:border-b-0 md:border-r text-center md:text-left">
                            <p className="text-3xl font-bold">200</p>
                            <p>Blog Posts Published</p>
                        </div>

                        <div className="content flex flex-col items-center md:items-start p-4 italic border-b md:border-b-0 md:border-r text-center md:text-left">
                            <p className="text-3xl font-bold">30</p>
                            <p>Books Read Annually</p>
                        </div>

                        <div className="content flex flex-col items-center md:items-start p-4 italic text-center md:text-left">
                            <p className="text-3xl font-bold">3</p>
                            <p>Languages Spoken</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
