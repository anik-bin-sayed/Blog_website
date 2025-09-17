import React, { useState } from "react";

// images
import image from "../../assets/Contact/contact-profile.png";

// styles
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    // Input change handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Validation function
    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("Form submitted successfully!");
            // console.log("Form Data:", formData);
        }

        // Reset form after successful submit
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

    };
    return (
        <div className="contact-container py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
                {/* Title + Profile Image */}
                <div className="relative flex flex-col items-center">
                    <h1
                        className="
              focused-text
              text-center
              font-semibold
              text-5xl md:text-6xl
              italic
              tracking-tight
            "
                    >
                        say hello!
                    </h1>
                    <div className="absolute top-11 left-14">
                        <img
                            src={image}
                            alt="contact-profile"
                            className="
                w-[120px] md:w-[150px]
                h-[120px] md:h-[150px]
                rounded-full
                object-cover
              "
                        />
                    </div>
                </div>

                {/* Sub text */}
                <p
                    className="
            focused-text
            mt-40
            text-sm md:text-base
            text-gray-700
            text-center
          "
                >
                    Contact me to find out more or how I can help you better.
                </p>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl mx-auto p-6 mt-16 space-y-6"
                >
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col w-full">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-700 mb-1"
                            >
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input w-full p-3 border focus:outline-none"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div className="flex flex-col w-full">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-700 mb-1"
                            >
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input w-full p-3 border focus:outline-none"
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col w-full">
                        <label
                            htmlFor="subject"
                            className="text-sm font-medium text-gray-700 mb-1"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="input w-full p-3 border focus:outline-none"
                            placeholder="Enter subject"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col w-full">
                        <label
                            htmlFor="message"
                            className="text-sm font-medium text-gray-700 mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="input w-full p-3 border focus:outline-none"
                            placeholder="Write your message..."
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm">{errors.message}</p>
                        )}
                    </div>

                    {/* Button */}
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="btn px-5 py-3 cursor-pointer uppercase tracking-[0.3cap]"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
