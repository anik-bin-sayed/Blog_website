import React, { useState } from 'react'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import img1 from '../../assets/Footer/footer-01.jpg'
import img2 from '../../assets/Footer/footer-02.jpg'
import img3 from '../../assets/Footer/footer-03.jpg'
import img4 from '../../assets/Footer/footer-04.jpg'
import { Link } from 'react-router-dom';

import './Footer.css'

const Footer = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim() === "") {
            setError("Email is required.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");
        setEmail("");
        alert("Subscribed with email: " + email);

    }

    return (
        <section className="section border-t border-gray-100">
            <div className="w-[80%] mx-auto pb-20">
                <p className="text-center text-xl md:text-2xl font-semibold py-20 ">
                    Follow me on Instagram
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {/* Image 1 */}


                    <div className="relative w-full sm:w-[45%] md:w-[23%] overflow-hidden rounded">
                        <img
                            src={img1}
                            alt="Footer Image 1"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center 
                    opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <FaInstagram className="text-white text-3xl" />
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="relative w-full sm:w-[45%] md:w-[23%] overflow-hidden rounded">
                        <img
                            src={img2}
                            alt="Footer Image 2"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center 
                    opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <FaInstagram className="text-white text-3xl" />
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="relative w-full sm:w-[45%] md:w-[23%] overflow-hidden rounded">
                        <img
                            src={img3}
                            alt="Footer Image 3"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center 
                    opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <FaInstagram className="text-white text-3xl" />
                        </div>
                    </div>

                    {/* Image 4 */}
                    <div className="relative w-full sm:w-[45%] md:w-[23%] overflow-hidden rounded">
                        <img
                            src={img4}
                            alt="Footer Image 4"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center 
                opacity-100 transition-opacity duration-300 cursor-pointer">
                            <FaInstagram className="text-white text-3xl" />
                        </div>
                    </div>
                </div>


                <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8 ">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
                        <p className="text-black/80 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug">
                            Let’s learn, explore, and thrive together!
                        </p>
                        <span className='text-sm md:text-lg text-black/70 mt-4'>
                            Connect with 4000+ like-minded individuals and be part of a community that values growth, curiosity, and empowerment.
                        </span>
                    </div>

                    {/* Right Form */}
                    <div className="w-full md:w-1/2 lg:w-2/5">
                        <form onSubmit={handleSubscribe} className="flex flex-col">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input w-full px-4 py-3 rounded-md mb-4 outline-none"
                            />

                            {error && <span className="text-red-500 text-sm mb-2">{error}</span>}

                            <button className="btn w-full px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>



            </div>

            {/* bottom footer */}
            <div className='mt-2 border-t border-gray-100'>
                <div className='w-[80%] mx-auto flex flex-col md:flex-row lg:flex-row gap-3 items-center justify-between py-10'>

                    {/* Brand Section */}
                    <div>
                        <Link to="/" className="logo text-decoration-none">
                            <h1 className="text-2xl font-bold italic">
                                Shofia <span className="font-normal text-yellow-600">Ellis</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                        <a href="#" className="hover:text-[#93825e] transition">Home</a>
                        <a href="#" className="hover:text-[#93825e] transition">About</a>
                        <a href="#" className="hover:text-[#93825e] transition">Services</a>
                        <a href="#" className="hover:text-[#93825e] transition">Contact</a>
                    </div>

                    {/* Social Media */}
                    <div>
                        <div className="flex gap-4 mt-3 text-xl">
                            <a href="#" className="hover:text-[#93825e] transition"><FaFacebook /></a>
                            <a href="#" className="hover:text-[#93825e] transition"><FaTwitter /></a>
                            <a href="#" className="hover:text-[#93825e] transition"><FaInstagram /></a>
                            <a href="#" className="hover:text-[#93825e] transition"><FaLinkedin /></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}

export default Footer