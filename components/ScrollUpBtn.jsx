"use client"

import React, { useState, useEffect } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollUpBtn = () => {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll event to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#1A1A1A] opacity-85 text-white w-12 h-12 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-800 transition"
        >
          <KeyboardArrowUp className="text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollUpBtn;
