import React from "react";
import Image from "next/image";
import Exeo from "@/public/homeImages/brand1.png"
import Natuska from "@/public/homeImages/brand2.png";
import Un from "@/public/homeImages/brand3.png";
import Saona from "@/public/homeImages/brand4.png";
import Chain from "@/public/homeImages/brand5.png";

const BrandBar = () => {
  const brands = [
    { src: Exeo, alt: "Exeo" },
    { src: Natuska, alt: "Natuska" },
    { src: Un, alt: "Un" },
    { src: Saona, alt: "Saona" },
    { src: Chain, alt: "Chain" },
  ];

  return (
    <div className="bg-black opacity-90 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center space-x-8 md:space-x-16">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand.src}
              alt={brand.alt}
              width={220}
              className="h-16 w-1/4 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandBar;
