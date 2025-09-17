import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// style
import "./PageNotFound.css";

const PageNotFound = () => {
    return (
        <div className="page-not-found w-full h-screen flex flex-col items-center justify-center  p-6 text-center">
            {/* 404 Animated Text */}
            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="title text-6xl sm:text-8xl font-extrabold text-indigo-600 dark:text-indigo-400 drop-shadow-lg"
            >
                404
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg sm:text-xl text-slate-700 dark:text-slate-300"
            >
                Oops! The page you’re looking for doesn’t exist.
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex flex-col sm:flex-row gap-3"
            >
                <Link
                    to="/"
                    className="go-btn px-5 py-3 font-medium shadow hover:brightness-110 transition"
                >
                    Go Home
                </Link>
                <Link
                    to="/contact"
                    className="go-btn px-5 py-3 font-medium shadow hover:brightness-110 transition"
                >
                    Contact Support
                </Link>
            </motion.div>
        </div>
    );
};

export default PageNotFound;
