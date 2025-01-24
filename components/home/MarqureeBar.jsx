import React from 'react';

const MarqureeBar = () => {
  return (
    <div className="bg-black bg-opacity-85 text-white py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center space-x-8 font-bold tracking-wide">
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-[55.78px] xl:text-[45.78px]">
          SOFTWARE HOUSE
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[45.78px] xl:text-[50.78px]">✶</span>
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-[55.78px] xl:text-[45.78px]">
          VOLTIC AGENCY
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[45.78px] xl:text-[50.78px]">✶</span>
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-[55.78px] xl:text-[45.78px]">
          SOFTWARE
        </span>
        {/* Repeat items for smooth scrolling */}
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-[55.78px] xl:text-[45.78px]">
          SOFTWARE HOUSE
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[45.78px] xl:text-[50.78px]">✶</span>
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-[55.78px] xl:text-[45.78px]">
          VOLTIC AGENCY
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[45.78px] xl:text-[50.78px]">✶</span>
        <span className="text-xl sm:text-2xl md:text-4xl lg:text-[55.78px] xl:text-[45.78px]">
          SOFTWARE
        </span>
      </div>
    </div>
  );
};

export default MarqureeBar;
