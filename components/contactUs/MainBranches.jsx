import React from "react";
import Image from "next/image";
import BGmap from "@/public/contactUs/BGmap.png";

const MainBranches = () => {
  return (
    <section className="relative  bg-black text-white py-16 px-6 sm:px-8">
      <div className="w-3/4 mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-[55px] font-bold leading-tight uppercase">
          Our Main <br /> Branches in the World
        </h2>
        <p className="text-[20px] font-normal text-gray-400 mt-4 leading-relaxed">
          We operate multiple branches worldwide, giving you the flexibility to
          choose the location that best suits your convenience and needs.
        </p>
      </div>

      {/* Map Section */}
      <div className="relative flex justify-center mt-12">
        {/* Background Map */}
        <Image
          src={BGmap}
          alt="World Map"
          className="w-3/4 h-auto object-cover"
          priority
        />

        {/* Markers */}
        <div className="absolute inset-0">
          {/* Example marker positions - adjust as needed */}
          <div className="absolute top-[20%] left-[30%] w-6 h-6 bg-black border-2 border-white rounded-full"></div>
          <div className="absolute top-[40%] left-[50%] w-6 h-6 bg-black border-2 border-white rounded-full"></div>
          <div className="absolute top-[60%] left-[70%] w-6 h-6 bg-black border-2 border-white rounded-full"></div>
          <div className="absolute top-[80%] left-[20%] w-6 h-6 bg-black border-2 border-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default MainBranches;
