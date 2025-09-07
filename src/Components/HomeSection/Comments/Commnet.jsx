import React from 'react'

// css
import './Comments.css'

// Icons
import { ImQuotesRight } from "react-icons/im";

const Comments = () => {
    return (
        <div className="comments_section py-16 md:py-20 text-center bg-gray-50">
            <div className="w-[90%] md:w-[80%] mx-auto">

                {/* Quote Icon */}
                <div className="quote_icon flex justify-center text-4xl md:text-5xl font-bold text-gray-600">
                    <ImQuotesRight />
                </div>

                {/* Title */}
                <h1 className="comment_title text-3xl md:text-5xl font-semibold py-6">
                    What Readers <span className="italic">Say</span>
                </h1>

                {/* Testimonial */}
                <div className="max-w-2xl mx-auto text-center flex flex-col items-center justify-center">
                    <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                        "Sophia's blog is a treasure trove of inspiration and insight. Her travel stories transport you to new worlds, while her tech tips and wellness advice have genuinely improved my daily routine. I always look forward to her latest posts. It's like getting a dose of motivation straight to my inbox!"
                    </span>
                    <p className="py-3 font-medium text-gray-900">— Emily Thompson</p>
                </div>
            </div>
        </div>
    )
}

export default Comments
