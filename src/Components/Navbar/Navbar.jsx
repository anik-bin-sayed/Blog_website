import React, { useEffect, useRef, useState } from "react";

// router
import { Link, NavLink } from "react-router-dom";

// theme context
import { useTheme } from "../ThemeProvider.jsx";

// icons
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";

// styles
import "./Navbar.css";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const menuRef = useRef(null);
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
        <header className="header">
            <div className="w-[80%]  mx-auto flex items-center justify-between py-4">
                {/* Logo */}
                <Link to="/" className="logo text-decoration-none">
                    <h1 className="text-2xl font-semibold italic thin">
                        Sophia <span className="font-normal">Ellis</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="navbar hidden lg:flex space-x-6 items-center text-sm">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/blog" className="nav-link">
                        Blog
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="nav-link">
                        Contact
                    </NavLink>

                    {/* Theme Dropdown */}
                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="theme flex gap-2 items-center justify-center px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
                        >
                            Theme {dropdownOpen ? <IoArrowUpOutline /> : <IoArrowDownOutline />}
                        </button>

                        {/* Always in DOM, smooth animation */}
                        <div
                            className={`dropdownMenu absolute right-0 mt-2 w-40 rounded shadow-lg z-50 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
                            ${dropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
                        >
                            {["light", "dark", "blue", "crimson"].map((t) => {
                                let colors = {
                                    light: ["#fff", "#fff"],
                                    dark: ["#93825e", "#7e6b50"],
                                    blue: ["#3b82f6", "#60a5fa"],
                                    crimson: ["#dc2626", "#b91c1c"]
                                };
                                return (
                                    <button
                                        key={t}
                                        onClick={() => toggleTheme(t)}
                                        className={`dropBtn flex gap-2 w-full px-4 py-2 text-left rounded ${theme === t ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                                            }`}
                                    >
                                        {colors[t].map((c, i) => (
                                            <div
                                                key={i}
                                                className="h-4 w-4 rounded-full border"
                                                style={{ backgroundColor: c }}
                                            ></div>
                                        ))}

                                        {/* Active indicator */}
                                        {theme === t && (
                                            <span className="ml-auto w-3 h-3 rounded-full bg-green-500"></span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </nav>

                {/* Desktop Socials + Subscribe */}
                <div className="hidden lg:flex items-center space-x-4">
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
                    <button className="theme px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-sm uppercase tracking-[0.3cap] ">Subscribe</button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-gray-700 text-2xl focus:outline-none"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`responsive lg:hidden border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <nav className="flex flex-col items-start px-6 py-4 space-y-3 text-gray-700 font-medium">
                    <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
                        Blog
                    </NavLink>
                    <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
                        Contact
                    </NavLink>

                    {/* Mobile Theme */}
                    <div className="w-full">
                        <p className="font-semibold mb-2">Select Theme:</p>
                        <div className="grid grid-cols-2 gap-2">
                            {["light", "dark", "blue", "crimson"].map((t) => {
                                let colors = {
                                    light: ["#fff", "#fff"],
                                    dark: ["#93825e", "#7e6b50"],
                                    blue: ["#3b82f6", "#60a5fa"],
                                    crimson: ["#dc2626", "#b91c1c"]
                                };
                                return (
                                    <button
                                        key={t}
                                        onClick={() => toggleTheme(t)}
                                        className={`responsiveBtn flex items-center justify-center gap-2 w-full px-4 py-2 rounded ${theme === t ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                                            }`}
                                    >
                                        {colors[t].map((c, i) => (
                                            <div key={i} className="h-4 w-4 rounded-full border" style={{ backgroundColor: c }}></div>
                                        ))}

                                        {theme === t && (
                                            <span className="ml-auto w-3 h-3 rounded-full bg-green-500"></span>
                                        )}
                                    </button>
                                );
                            })}
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
                    <button className=" theme px-3 py-2 rounded cursor-pointer text-sm uppercase tracking-[0.5cap]">
                        Subscribe
                    </button>
                </div>
            </div>
        </header>
    );
}