import React from "react";
import { ImQuotesRight } from "react-icons/im";

const Comments = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6 shadow-sm">
            <ImQuotesRight className="text-3xl text-teal-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Readers{" "}
            <span className="text-teal-600 relative inline-block">
              Say
              <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-200 rounded-full -mb-2"></span>
            </span>
          </h2>

          <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 mt-8">
            <div className="absolute top-4 left-4 opacity-5 text-6xl text-gray-800">
              <ImQuotesRight />
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed italic relative z-10">
              "Sophia's blog is a treasure trove of inspiration and insight. Her
              travel stories transport you to new worlds, while her tech tips
              and wellness advice have genuinely improved my daily routine. I
              always look forward to her latest posts. It's like getting a dose
              of motivation straight to my inbox!"
            </p>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-gray-800 font-semibold">— Emily Thompson</p>
              <p className="text-sm text-gray-500 mt-1">Loyal Reader</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
