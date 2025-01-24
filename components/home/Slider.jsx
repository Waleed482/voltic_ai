"use client";

import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/homeImages/sliderP.png";

const testimonials = [
  {
    name: "Sara Bills",
    role: "Product Manager",
    feedback:
      "The software they developed for us is not only high-quality but also perfectly tailored to our business goals. The team truly delivers.",
    image: img1,
  },
  {
    name: "Misshu Kvv",
    role: "CEO of Software Company",
    feedback:
      "We’ve worked with this team for years, and their service is consistently excellent.",
    image: img1,
  },
  {
    name: "John Doe",
    role: "Business Owner",
    feedback:
      "Their innovative approach transformed our business operations. Highly recommended!",
    image: img1,
  },
  {
    name: "Sara Bills",
    role: "Product Manager",
    feedback:
      "The software they developed for us is not only high-quality but also perfectly tailored to our business goals. The team truly delivers.",
    image: img1,
  },
  {
    name: "Misshu Kvv",
    role: "CEO of Software Company",
    feedback:
      "We’ve worked with this team for years, and their service is consistently excellent.",
    image: img1,
  },
  {
    name: "John Doe",
    role: "Business Owner",
    feedback:
      "Their innovative approach transformed our business operations. Highly recommended!",
    image: img1,
  },
];

const Slider = () => {
  // Set the second testimonial as the initial state
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold uppercase">Our Happy Clients</h2>
          <p className="text-gray-400 text-base mt-2">
            Discover how our solutions have transformed businesses through the
            voices of our satisfied clients.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 space-x-8"
            style={{
              transform: `translateX(-${currentIndex * 105}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[90%] md:min-w-[70%] lg:min-w-[60%] mx-4 bg-gray-900 rounded-lg p-8 shadow-lg flex flex-col justify-between transition-all duration-300"
              >
                {/* Client Info */}
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                {/* Feedback */}
                <p className="text-gray-300 text-base mt-4">
                  {testimonial.feedback}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="bg-gray-700 text-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-gray-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-700 text-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-gray-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
