import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import from files
import { useTheme } from "../ThemeProvider.jsx";
import "./Navbar.css";

// import icons
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const menuRef = useRef(null);
    const { toggleTheme } = useTheme();
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        if (dropdownOpen) {
            window.addEventListener("click", handleClickOutside);
        }
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <header className="header shadow-sm sticky top-0 z-50">
            <div className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between py-4">
                {/* Logo */}
                <Link to="/" className="logo text-decoration-none">
                    <h1 className="text-2xl font-bold italic">
                        Shofia <span className="font-normal">Ellis</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="navbar hidden md:flex space-x-6 text-gray-700 font-medium items-center">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>

                    {/* Dropdown for Theme */}
                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="theme flex gap-2 items-center justify-center px-3 py-2 rounded cursor-pointer"
                        >
                            Theme {dropdownOpen ? <IoArrowUpOutline /> : <IoArrowDownOutline />}
                        </button>

                        <div
                            className={`dropdownMenu absolute right-0 mt-2 w-40 rounded shadow-lg z-50 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
      ${dropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
                        >
                            <button
                                onClick={() => toggleTheme("light")}
                                className={`dropBtn flex gap-2 w-full px-4 py-2 text-left rounded ${theme === "light" ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                                    }`}
                            >
                                <div
                                    className="h-4 w-4 rounded-full border"
                                    style={{ backgroundColor: "#fff" }}
                                ></div>
                                <div
                                    className="h-4 w-4 rounded-full border"
                                    style={{ backgroundColor: "#fff" }}
                                ></div>

                                {/* Active indicator: small green dot on the right */}
                                {theme === "light" && (
                                    <span className="ml-auto w-3 h-3 rounded-full bg-green-500"></span>
                                )}
                            </button>
                            <button
                                onClick={() => toggleTheme("dark")}
                                className="dropBtn flex gap-2 w-full px-4 py-2 text-left"
                            >
                                <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: "#93825e" }}></div>
                                <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: "#7e6b50" }}></div>
                            </button>
                            <button
                                onClick={() => toggleTheme("blue")}
                                className="dropBtn block w-full px-4 py-2 text-left"
                            >
                                🔵🔵
                            </button>
                            <button
                                onClick={() => toggleTheme("crimson")}
                                className="dropBtn block w-full px-4 py-2 text-left"
                            >
                                🔴🔴
                            </button>
                        </div>
                    </div>

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
                    <button className="theme px-3 py-2 rounded  hover:bg-gray-100 cursor-pointer">Subscribe</button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-700 text-2xl focus:outline-none"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div >

            {/* Mobile Dropdown Menu */}
            <div div
                className={`responsive md:hidden border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`
                }
            >
                <nav className="flex flex-col items-start px-6 py-4 space-y-3 text-gray-700 font-medium">
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>

                    {/* Mobile Theme Dropdown */}
                    <div className="w-full">
                        <p className="font-semibold mb-2">Select Theme:</p>
                        <div className="grid grid-cols-2">
                            <button
                                onClick={() => toggleTheme("light")}
                                className="responsiveBtn flex items-center justify-center gap-2 w-full px-4 py-2 text-left"
                            >
                                <div
                                    className="h-4 w-4 rounded-full border"
                                    style={{ backgroundColor: "#fff" }}
                                ></div>
                                <div
                                    className="h-4 w-4 rounded-full border"
                                    style={{ backgroundColor: "#fff" }}
                                ></div>
                            </button>
                            <button
                                onClick={() => toggleTheme("dark")}
                                className="dropBtn flex items-center justify-center gap-2 w-full px-4 py-2 text-left"
                            >

                                <div
                                    className="h-4 w-4 rounded-full border"
                                    style={{ backgroundColor: "#93825e" }}
                                ></div>
                                <div
                                    className="h-4 w-4 rounded-full border"
                                    style={{ backgroundColor: "#7e6b50" }}
                                ></div>
                            </button>
                            <button
                                onClick={() => toggleTheme("blue")}
                                className="dropBtn flex items-center justify-center w-full px-4 py-2 text-left"
                            >
                                🔵🔵
                            </button>
                            <button
                                onClick={() => toggleTheme("crimson")}
                                className="dropBtn flex items-center justify-center w-full px-4 py-2 text-left"
                            >
                                🔴🔴
                            </button>

                        </div>
                    </div>
                </nav>
                <div className="flex flex-col items-start px-6 py-4 space-y-3">
                    <div className="flex space-x-4 text-xl text-gray-600">
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
                    <button className=" theme px-3 py-2 rounded cursor-pointer">
                        Subscribe
                    </button>
                </div>
            </div >
        </header >
    );
}
