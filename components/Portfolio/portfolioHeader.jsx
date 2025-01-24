import Image from "next/image";

const backgroundImage = "/aboutus_img/bg.png";

export default function PortfolioHeader() {
  return (
    <section className="relative bg-blue-800 text-white text-center py-16 sm:py-36 px-6 sm:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover opacity-100"
          quality={100}
        />
        <div className="absolute inset-0 bg-blue-800 opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1
          className="font-bold mb-4"
          style={{ fontSize: "80px" }} // Updated title size
        >
          PORTFOLIO
        </h1>
        <p
          className="text-gray-300"
          style={{ fontSize: "20px" }} // Updated text size
        >
          Explore our portfolio of software solutions that highlight our
          expertise and dedication to excellence.
        </p>
      </div>
    </section>
  );
}
