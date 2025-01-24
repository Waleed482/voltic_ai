"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const images = {
  step1: "/aboutus_img/aboutUs_4.png",
  step2: "/aboutus_img/aboutUs_5.png",
  step3: "/aboutus_img/aboutUs_6.png",
};

const steps = [
  {
    title: "1. Discovery & Planning",
    description:
      "We start by understanding your goals, challenges, and vision. Through collaboration and analysis, we create a detailed roadmap for your project.",
    image: images.step1,
    alignment: "left",
  },
  {
    title: "2. Design & Prototyping",
    description:
      "Our team creates wireframes and prototypes focused on usability and aesthetics, ensuring the solution aligns perfectly with your business needs.",
    image: images.step2,
    alignment: "right",
  },
  {
    title: "3. Development & Deployment",
    description:
      "We bring your vision to life using the latest technologies, rigorously testing the software to ensure it meets the highest standards of performance and scalability.",
    image: images.step3,
    alignment: "left",
  },
];

export default function Process() {
  const [dotPosition, setDotPosition] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const { top, bottom, height } = section.getBoundingClientRect(); // Get the section's position and height
      const viewportHeight = window.innerHeight;

      // Ensure the calculation accounts for both entering and leaving the viewport
      const progress = Math.min(
        Math.max((viewportHeight - top) / (height + viewportHeight), 0),
        1
      );

      // Convert progress to percentage (0 to 100)
      const position = progress * 100;
      setDotPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-16 px-6 sm:px-12"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          className="font-bold mb-4"
          style={{ fontSize: "55.7px" }} // Main heading size
        >
          OUR PROCESS
        </h2>
        <p
          className="text-gray-300 text-balance leading-relaxed max-w-3xl mx-auto"
          style={{ fontSize: "20px" }} // Subheading size
        >
          Discover how our streamlined process transforms your vision into
          impactful digital solutions, driving growth and meaningful results.
        </p>
      </div>

      <div className="relative">
        {/* Gray Vertical Line */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2"></div>

        {/* Moving Dot */}
        <motion.div
          className="absolute left-1/2 w-4 h-4 bg-blue-700 rounded-full z-20 transform -translate-x-1/2"
          style={{
            top: `${dotPosition}%`, // Dot position as percentage
          }}
          animate={{ top: `${dotPosition}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        ></motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${
                step.alignment === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 px-6">
                <h3
                  className="font-bold mb-4"
                  style={{ fontSize: "40px" }} // Step heading size
                >
                  {step.title}
                </h3>
                <p
                  className="text-gray-300"
                  style={{ fontSize: "24px" }} // Step description size
                >
                  {step.description}
                </p>
              </div>

              <div className="flex-1 px-6">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={478.25} // Updated width
                  height={389.95} // Updated height
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
