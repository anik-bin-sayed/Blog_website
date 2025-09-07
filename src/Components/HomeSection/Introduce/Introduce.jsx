import React from 'react'

// Image
import image from "../../../assets/introduce/who-am-img.jpg"
import { introduce } from '../../../data/introduce'

// css
import "./Introduce.css"
import { Link } from 'react-router-dom'


const Introduce = () => {
    return (
        <div className="introduce_section py-20">
            <div className="w-[90%] md:w-[80%] mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                    {/* Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={image}
                            alt="Who am I"
                            className="rounded-2xl shadow-lg w-full md:w-80 h-auto object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className=" introduce_content rounded-xl p-6 shadow-md max-w-2xl">
                        {introduce.map((item, index) => (
                            <div key={index}>
                                <h1 className="greetings text-5xl italic md:text-3xl font-bold mb-4">
                                    {item.greetings}
                                </h1>
                                <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                                    {item.description.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                </div>

                            </div>
                        ))}
                        <Link
                            to="/about"
                            className="introduce_btn mt-10 inline-block text-xl  italic font-thin"
                        >
                            More About Me
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce
