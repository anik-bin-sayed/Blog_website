import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from "react-router-dom";
import img1 from "../../assets/Footer/footer-01.jpg";
import img2 from "../../assets/Footer/footer-02.jpg";
import img3 from "../../assets/Footer/footer-03.jpg";
import img4 from "../../assets/Footer/footer-04.jpg";

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
    alert("Subscribed with email: " + email);
    setEmail("");
  };

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Instagram Gallery */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <p className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-8">
          Follow me on Instagram
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[img1, img2, img3, img4].map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img}
                alt={`Instagram post ${idx + 1}`}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaInstagram className="text-white text-3xl transform transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-teal-50 to-white p-6 md:p-8 rounded-2xl shadow-sm">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Let’s learn, explore, and thrive together!
            </h2>
            <p className="text-gray-600 mt-4 max-w-md">
              Connect with 4000+ like-minded individuals and be part of a
              community that values growth, curiosity, and empowerment.
            </p>
          </div>

          <div className="md:w-1/2 max-w-md w-full">
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              />
              {error && <span className="text-red-500 text-sm">{error}</span>}
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 mt-8">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <Link
            to="/"
            className="text-2xl font-semibold italic text-gray-800 hover:text-teal-600 transition-colors"
          >
            Sophia <span className="font-normal">Ellis</span>
          </Link>

          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-teal-600 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm pb-6">
          © {new Date().getFullYear()} Sophia Ellis. All rights reserved.
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-teal-100 text-teal-600 cursor-pointer transition-all duration-300 hover:bg-teal-600 hover:text-white hover:shadow-lg transform hover:scale-110 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <IoIosArrowRoundUp className="text-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
