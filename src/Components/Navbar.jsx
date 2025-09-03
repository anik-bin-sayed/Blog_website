import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // jodi click menu ba button er baire hoy tahole close
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (isOpen) {
            window.addEventListener("click", handleClickOutside);
        }

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="bg-[#deddcf] shadow-sm sticky top-0 z-50">
            <div className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between py-4">
                {/* Logo */}
                <Link to="/" className="text-decoration-none">
                    <h1 className="text-2xl font-bold italic">
                        Shofia <span className="font-normal text-yellow-600">Ellis</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                {/* Socials + Subscribe (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center space-x-3 text-xl text-gray-600">
                        <Link to="https://www.instagram.com/" target="_blank" className="hover:text-pink-500 transition">
                            <FaInstagram />
                        </Link>
                        <Link to="https://www.facebook.com/" target="_blank" className="hover:text-blue-600 transition">
                            <CiFacebook />
                        </Link>
                        <Link to="https://www.linkedin.com/" target="_blank" className="hover:text-blue-700 transition">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <button className="btn">
                        Subscribe
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-700 text-2xl focus:outline-none"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown Menu with smooth animation */}
            <div
                className={`md:hidden bg-[#deddcf] border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col items-start px-6 py-4 space-y-3 text-gray-700 font-medium">
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
                </nav>
                <div className="flex flex-col items-start px-6 py-4 space-y-3">
                    <div className="flex space-x-4 text-xl text-gray-600">
                        <Link to="https://www.instagram.com/" target="_blank" className="hover:text-pink-500 transition">
                            <FaInstagram />
                        </Link>
                        <Link to="https://www.facebook.com/" target="_blank" className="hover:text-blue-600 transition">
                            <CiFacebook />
                        </Link>
                        <Link to="https://www.linkedin.com/" target="_blank" className="hover:text-blue-700 transition"

                        >
                            <FaLinkedinIn />
                        </Link>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
                        Subscribe
                    </button>
                </div>
            </div>
        </header>
    );
}
