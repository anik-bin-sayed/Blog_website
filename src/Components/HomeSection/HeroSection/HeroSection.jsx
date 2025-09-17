import React from "react";
// Router
import { Link } from "react-router-dom";
// Icons
import { HiSun } from "react-icons/hi";
import { FaWifi, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
// Styles
import './HeroSection.css'
// Images
import image1 from '../../../assets/Hero_Img/hero-img-01.jpg'
import image2 from '../../../assets/Hero_Img/hero-img-02.jpg'
import image3 from '../../../assets/Hero_Img/hero-img-03.jpg'

export default function HeroSection() {

    // Social Stats
    const stats = [
        { icon: <FaInstagram />, count: "12K+" },
        { icon: <FaWifi />, count: "8K+" },
        { icon: <FaPinterestP />, count: "5K+" },
        { icon: <FaLinkedinIn />, count: "3K+" },
    ];
    return (<>
        <section className="section pt-20">

            <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center text-center py-20 space-y-6">
                <div className="title flex items-center gap-4 text-xl uppercase tracking-wider text-thin ">
                    <span className="text-2xl" ><HiSun /></span>
                    <p className="font-medium text-[18px]">I’m Sophia!</p>
                </div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                    <h1 className="home_title text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium leading-tight">
                        Welcome to My Journey of
                        Discovery and Growth
                    </h1>

                    <span className="block text-gray-600 text-base [word-spacing:4px] text-center">
                        A marketing professional passionate about exploring the world, embracing technology,
                        enhancing personal growth, and nurturing wellness.
                    </span>
                </div>




                <button className="btn px-6 py-3 cursor-pointer uppercase tracking-[0.3cap] font-medium">
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
                            Over 30K people in my <span className="hero_social_focused">Network</span>
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
