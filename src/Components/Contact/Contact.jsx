import React, { useState } from "react";
import image from "../../assets/Contact/contact-profile.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
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
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold italic text-gray-800 text-center relative z-10">
            say{" "}
            <span className="text-teal-600 relative inline-block">
              hello!
              <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-200 rounded-full -mb-2"></span>
            </span>
          </h1>
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 translate-y-[-20px] md:translate-y-[-30px] z-0">
            <img
              src={image}
              alt="Contact profile"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>

        <p className="text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-20 mb-12">
          Contact me to find out more or how I can help you better.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 outline-none transition-all"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 outline-none transition-all"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 outline-none transition-all"
              placeholder="Enter subject"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 outline-none transition-all"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 text-white font-medium rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Send
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
