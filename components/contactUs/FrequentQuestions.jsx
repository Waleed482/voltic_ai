"use client"
import React, { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import CallMadeIcon from '@mui/icons-material/CallMade';

const FrequentQuestions = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const questions = [
    {
      question: "How much does software development cost?",
      answer:
        "The cost varies based on project complexity, required features, and timelines. We provide a detailed estimate after understanding your needs during the initial consultation.",
    },
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with startups, small businesses, and enterprises across a variety of industries to create tailored solutions.",
    },
    {
      question: "Can you develop software for both web and mobile platforms?",
      answer:
        "Yes, we specialize in developing high-quality software for both web and mobile platforms, ensuring seamless performance across devices.",
    },
    {
      question:
        "How long does it take to complete a software development project?",
      answer:
        "The timeline depends on the project scope and complexity. On average, most projects take 3 to 6 months to complete.",
    },
    {
      question: "What technologies and frameworks do you work with?",
      answer:
        "We work with a wide range of technologies and frameworks, including React, Node.js, Python, and more, to deliver the best solutions.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/2">
            <h2 className="text-[55px] font-bold uppercase leading-tight">
              Frequently <br /> Asked Questions
            </h2>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <p className="text-[20px] font-normal text-gray-400">
              Discover insights and detailed information about our products and
              services. Get the clarity you need – quickly and easily.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition flex items-center">
              Read More About Us <CallMadeIcon className="ml-2" />
            </button>
          </div>
        </div>

        {/* Questions Section */}
        <div className="mt-12 ">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`border-t border-b  border-t-gray-900 border-b-gray-900  ${
                expanded === index ? "bg-[#1A1A1A ]"  : "bg-black "&& "pb-10"
              }`}
            >
              <div 
                className="flex justify-between items-center px-6 pt-10 border-r-0 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-[31px] font-bold">
                  {item.question.toUpperCase()}
                </h3>
               
                {expanded === index ? (
                     <div className="rounded-full bg-[#3359E0] w-[54px] h-[54px] flex items-center justify-center">
                  <ExpandLess className="text-white " /></div>
                ) : (
                    <div className="rounded-full w-[54px] h-[54px] flex items-center justify-center">
                  <ExpandMore className="text-white" />
                  </div>
                )}
                </div>
              
              {expanded === index && (
                <div className=" w-4/5 px-6 pb-10 text-gray-400 text-[20px] font-normal ">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
