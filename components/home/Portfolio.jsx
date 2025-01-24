import React from 'react';


import PortfolioGrid from '../Portfolio/portfolioGrid';

const Portfolio = () => {
 
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white uppercase">Portfolio</h2>
          <p className="text-gray-400 text-lg mt-2">
            Explore our portfolio of software solutions that highlight our talent and dedication to innovation.
          </p>
        </div>

        {/* Portfolio Grid */}
       <PortfolioGrid/>
      </div>
    </section>
  );
};

export default Portfolio;
