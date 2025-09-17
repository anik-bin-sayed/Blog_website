import React from 'react'

// styles
import './Follow.css'

// icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";


const Follow = () => {
    return (
        <div className='follow-container'>
            <div className='w-[80%] mx-auto flex flex-col md:flex-row lg:flex-row gap-3 items-center justify-evenly py-20'>
                <div className='focused-text flex flex-col items-center justify-center gap-4'>
                    <h2 className='text-center uppercase font-semibold'>My Email</h2>
                    <p className=''>info@sophiaellis.com</p>
                </div>
                <div
                    className="follow-border border w-full md:w-0 lg:w-0 h-0 md:h-[200px] lg:h-[200px]"
                />

                <div>
                    <h2 className='text-center uppercase font-semibold'>Follow Me</h2>
                    {/* Social Media */}
                    <div className='flex items-center justify-center gap-4'>
                        <div className="flex gap-4 mt-3 text-xl">
                            <a href="#" className="footer-social-icon"><FaFacebook /></a>
                            <a href="#" className="footer-social-icon"><FaTwitter /></a>
                            <a href="#" className="footer-social-icon"><FaInstagram /></a>
                            <a href="#" className="footer-social-icon"><FaLinkedin /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Follow