"use client";
import React, { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import CallMadeIcon from "@mui/icons-material/CallMade";

const FrequentQuestions = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const questions = [
    {
      question: "What services does agency offer?",
      answer:
        "We provide a comprehensive range of services, including software development, graphic design, web development, mobile app development, digital marketing, IT consulting, and more.",
    },
    {
      question: "How can I request support or services?",
      answer:
        "Support or services can be requested by contacting us via phone, email, or through the online contact form on our website. Our team is prepared to assist you promptly.",
    },
    {
      question: "Response time for service requests?",
      answer:
        "Our standard response time for service requests is within one business day. For urgent issues, we aim to respond within a few hours.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a variety of industries, including healthcare, finance, education, manufacturing, retail, and others.",
    },
    {
      question: "Can you assist with graphic design projects?",
      answer:
        "Yes, our skilled team of graphic designers can assist with a variety of projects, including logo design, branding, marketing materials, and web graphics.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is flexible and tailored to meet the specific needs of our clients. We offer hourly rates, fixed project pricing, and retainer agreements. Please contact us for a customized quote.",
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
                expanded === index ? "bg-[#1A1A1A ]" : "bg-black " && "pb-10"
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
                    <ExpandLess className="text-white " />
                  </div>
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
