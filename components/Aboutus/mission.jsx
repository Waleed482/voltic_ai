import Image from "next/image";

const backgroundImage = "/aboutus_img/aboutUs_3.jpg";

export default function Mission() {
  return (
    <section className="relative bg-black text-white h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover w-full h-full"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-10 z-10"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Vision Box */}
          <div className="bg-gray-900 rounded-lg p-8 sm:p-12 text-center shadow-lg md:-mt-[14rem]">
            <h3 className="font-bold text-[55.5px] mb-4 sm:mb-6">Our Vision</h3>
            <p className="text-gray-400 text-[24px]">
              Driving growth and success in the ever-evolving digital world.
            </p>
          </div>

          {/* Mission Box */}
          <div className="bg-gray-900 rounded-lg p-8 sm:p-12 text-center shadow-lg md:-mt-[14rem]">
            <h3 className="font-bold text-[55.5px] mb-4 sm:mb-6">Our Mission</h3>
            <p className="text-gray-400 text-[24px]">
              Our mission is to empower businesses with cutting-edge technology,
              streamline operations, and drive digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
