import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-semibold italic tracking-tight text-indigo-600/40"
          >
            Sophia <span className="font-normal text-teal-600">Ellis</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {["/", "/blog", "/about", "/contact"].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-teal-600 ${
                    isActive ? "text-teal-600" : "text-gray-700"
                  }`
                }
              >
                {path === "/"
                  ? "Home"
                  : path
                      .replace("/", "")
                      .replace(/^\w/, (c) => c.toUpperCase())}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4 text-gray-600">
            <Link to="https://www.instagram.com/" target="_blank">
              <FaInstagram className="text-xl hover:text-pink-500" />
            </Link>
            <Link to="https://www.facebook.com/" target="_blank">
              <CiFacebook className="text-xl hover:text-blue-600" />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn className="text-xl hover:text-blue-700" />
            </Link>

            {/* Subscribe */}
            <button className="px-4 py-2 rounded-md bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition">
              Subscribe
            </button>
          </div>

          {/* Mobile Button */}
          <button onClick={toggleMenu} className="lg:hidden text-2xl">
            {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 flex flex-col gap-3">
            {["/", "/blog", "/about", "/contact"].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                onClick={closeMenu}
                className="text-gray-700 hover:text-teal-600"
              >
                {path === "/"
                  ? "Home"
                  : path
                      .replace("/", "")
                      .replace(/^\w/, (c) => c.toUpperCase())}
              </NavLink>
            ))}

            {/* Social */}
            <div className="flex gap-4 pt-2">
              <FaInstagram />
              <CiFacebook />
              <FaLinkedinIn />
            </div>

            {/* Subscribe */}
            <button className="px-4 py-2 bg-teal-600 text-white rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
