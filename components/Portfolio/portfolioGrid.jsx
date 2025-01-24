import Image from "next/image";

const portfolioImages = [
  "/portfolio_img/portfolio_1.png",
  "/portfolio_img/portfolio_2.png",
  "/portfolio_img/portfolio_3.png",
  "/portfolio_img/portfolio_4.png",
  "/portfolio_img/portfolio_5.png",
];

export default function PortfolioGrid() {
  return (
    <section className="bg-black py-12 px-6 sm:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {/* First Row */}
        <div className="col-span-6 sm:col-span-1 lg:col-span-1 rounded-lg overflow-hidden shadow-lg group relative">
          <Image
            src={portfolioImages[0]}
            alt="Portfolio 1"
            width={266}
            height={315}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white text-lg font-semibold">Lead Generation</p>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-1 lg:col-span-2 rounded-lg overflow-hidden shadow-lg group relative">
          <Image
            src={portfolioImages[1]}
            alt="Portfolio 2"
            width={334}
            height={315}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white text-lg font-semibold">Devops</p>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-1 lg:col-span-3 rounded-lg overflow-hidden shadow-lg group relative">
          <Image
            src={portfolioImages[2]}
            alt="Portfolio 3"
            width={436}
            height={315}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white text-lg font-semibold">Scrapping</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="col-span-6 sm:col-span-2 lg:col-span-3 rounded-lg overflow-hidden shadow-lg group relative">
          <Image
            src={portfolioImages[3]}
            alt="Portfolio 4"
            width={900}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white text-lg font-semibold">Web Development</p>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-2 lg:col-span-3 rounded-lg overflow-hidden shadow-lg group relative">
          <Image
            src={portfolioImages[4]}
            alt="Portfolio 5"
            width={900}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white text-lg font-semibold">App Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
