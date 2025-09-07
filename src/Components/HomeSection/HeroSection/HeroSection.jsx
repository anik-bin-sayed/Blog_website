import React from "react";

import { HiSun } from "react-icons/hi";
import { FaWifi, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import './HeroSection.css'

import { Link } from "react-router-dom";

import image1 from '../../../assets/Hero_Img/hero-img-01.jpg'
import image2 from '../../../assets/Hero_Img/hero-img-02.jpg'
import image3 from '../../../assets/Hero_Img/hero-img-03.jpg'

export default function HeroSection() {

    const stats = [
        { icon: <FaInstagram />, count: "12K+" },
        { icon: <FaWifi />, count: "8K+" },
        { icon: <FaPinterestP />, count: "5K+" },
        { icon: <FaLinkedinIn />, count: "3K+" },
    ];
    return (<>
        <section className="section pt-20">

            <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center text-center py-20 space-y-6">
                <h2 className="title flex items-center gap-2 text-2xl uppercase tracking-wider text-thin italic ">
                    <span className="text-yellow-700"><HiSun /></span>
                    I’m Sophia!
                </h2>
                <div className="max-w-2xl mx-auto text-center space-y-4">
                    <p className="text-3xl md:text-4xl font-bold leading-snug text-gray-800">
                        Welcome to My Journey of <br className="hidden sm:block" />
                        Discovery and Growth
                    </p>
                    <span className="block text-base md:text-lg text-gray-600 font-medium [word-spacing:4px]">
                        A marketing professional passionate about exploring the world, embracing technology,
                        enhancing personal growth, and nurturing wellness.
                    </span>
                </div>


                <button className="btn px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
                    <Link to="/blog">Get Inspired</Link>
                </button>
            </div>

            <div
                className="w-[90%] md:w-[80%] mx-auto"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                    <img
                        src={image1}
                        alt="Hero Image 1"
                        className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                    <img
                        src={image2}
                        alt="Hero Image 2"
                        className="w-full h-auto sm:h-72 lg:h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                    <img
                        src={image3}
                        alt="Hero Image 3"
                        className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </div>


                {/* Headline */}
                <div className="flex flex-col md:flex-col lg:flex-col items-center justify-center pt-12 lg:py-20 px-4 lg:px-0">
                    {/* Heading */}
                    <div className="socialIconsTitle w-full flex items-center justify-center mb-10 lg:mb-0">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold italic leading-tight text-gray-800 text-center lg:text-left">
                            Over 30K people in my <span className="text-yellow-700">Network</span>
                        </h1>
                    </div>

                    {/* Social Stats */}
                    <div className="w-full flex items-center justify-center lg:pt-10">
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-10 text-center">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center rounded-xl duration-300"
                                >
                                    <div className="socialIcons text-3xl md:text-4xl lg:text-4xl text-yellow-800 mb-2">
                                        {stat.icon}
                                    </div>
                                    <span className="text-xl sm:text-2xl italic font-semibold text-gray-800">
                                        {stat.count}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section >
    </>
    );
}
