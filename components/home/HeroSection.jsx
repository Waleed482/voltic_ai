"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import CallMadeIcon from "@mui/icons-material/CallMade";
import BacgroundImage from "@/public/homeImages/herosection-background-image.png";
import TransformImage from "@/public/homeImages/Digital-Agency-Hero-Image.webp.png";
import Link from "next/link";
import DownArrow from "@/public/homeImages/bg-br.png";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
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
            TOGETHER WE{" "}
            <span className="inline-block">
              <Image
                src={TransformImage}
                alt="Transform Icon"
                width={50}
                height={50}
              />
            </span>{" "}
            TRANSFORM
          </h1>
        </div>

        {/* Right Side - Description and Button */}
        <div className="sm:w-1/2 mt-8 lg:mt-0 lg:text-left">
          <p className="md:text-xl lg:text-xl mb-6">
            From custom software to innovative applications, we empower
            businesses with technology that creates impact.
          </p>
          <button className="rounded-full bg-white text-blue-800 font-semibold px-6 py-3 flex items-center justify-center hover:bg-gray-100 transition">
            GET STARTED <CallMadeIcon className="ml-2" />
          </button>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="relative flex justify-end right-20 md:right-60 -mb-[50px] z-50">
        <Link href="#services">
          <Image src={DownArrow} alt="Down Arrow" width={120} height={120} />
        </Link>
      </div>

      {/* Video Section */}
      <div className="relative flex justify-center items-center">
        <video
          ref={videoRef}
          src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1396396459456353581/7b5701cc94009b393b951c73c340cc59bded1ffa?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ciNkl2YksSCo4G6d6R3yUbSNQLw3fHTnDj1JkVKtdD2KqvXbEdb0Aca~Qr-Clb4c9WnsbVmd17XGZyP8419mo~iEBIuV8c-t4bZ14Rnx-9GiCEjsApU~wGgt3GqS1-23kJZJLerGklwZrS-2ZuGa1cO6oWN97Hyhy9DA32Ddsp7U1-Ro-YnNePz3dvhe8qLn7p0fIDXam9H0JGT90tlUT9qrrCqa1rR1UEdmcJ0ROKh6HI1IuCks3TIQCHyFWLFxAs9Wcp04mPKyVEP4t0ZnpH0kAFvHKrbpSYRCOlXWY8~f5IQVcqqeSbHZ~oWHjJkxQiX3-LSBElrzAky8UkOkAQ__"
          className="w-full h-auto rounded-t-[50] shadow-lg"
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>

        {/* Play Button */}
        {!isPlaying && (
          <button
            onClick={handlePlayVideo}
            className="absolute flex items-center justify-center bg-black opacity-50 text-white rounded-full w-16 h-16 shadow-lg hover:bg-black hover:opacity-75 transition"
          >
            ▶
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
