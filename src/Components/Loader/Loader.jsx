import React from "react";

import "./Loader.css";
const Loader = () => {
  return (
    <>
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm z-50">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-4 border-teal-200 border-t-teal-600 spinner"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500 font-medium tracking-wide">
          Loading...
        </p>
      </div>
    </>
  );
};

export default Loader;
