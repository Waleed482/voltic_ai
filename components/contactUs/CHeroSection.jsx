import React from "react";
import Image from "next/image";
import BacgroundImage from "@/public/homeImages/herosection-background-image.png";
import TransformImage from "@/public/homeImages/Digital-Agency-Hero-Image.webp.png";
import FormBG from "@/public/contactUs/formBG.png";

const CHeroSection = () => {
  return (
    <>
      <section className="relative bg-blue-800 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={BacgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-100"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-blue-800 opacity-30"></div> {/* Overlay */}
        </div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
          {/* Left Side - Title */}
          <div className="sm:w-1/2 lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-[79px] font-bold leading-tight">
              GET IN TOUCH{" "}
              <span className="inline-block">
                <Image
                  src={TransformImage}
                  alt="Transform Icon"
                  width={50}
                  height={50}
                />
              </span>{" "}
              WITH US
            </h1>
          </div>

          {/* Right Side - Description */}
          <div className="sm:w-1/2 mt-8 lg:mt-0 lg:text-left">
            <p className="md:text-xl lg:text-xl mb-6">
              Experience how our efficient methodology converts your ideas into
              powerful business solutions, fostering growth and delivering
              significant outcomes.
            </p>
          </div>
        </div>

        {/* Form Section with Full Width */}
        <div className="relative w-full mt-10">
          <div className="relative">
            {/* Full Width Image */}
            <div className="relative">
              <Image
                src={FormBG}
                alt="Form Background"
                className="w-full h-auto object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute "></div>
            </div>

            {/* Form on Right Side */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 lg:w-[33%] bg-[#1A1A1A] text-white rounded-lg p-6 shadow-lg">
              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full mt-2 px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full mt-2 px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1"
                    className="w-full mt-2 px-4 py-3 bg-[#1A1A1A] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message here"
                    className="w-full mt-2 px-4 py-3 bg-[#1A1A1A] border  border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CHeroSection;
