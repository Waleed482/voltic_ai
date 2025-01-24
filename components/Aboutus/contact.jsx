import Image from "next/image";
const backgroundImage = "/aboutus_img/bg.png";

export default function CallToAction() {
  return (
    <section className="relative text-white text-center py-24 px-6 sm:px-12 rounded-t-3xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Background Design"
          fill
          className="object-cover opacity-100 rounded-t-3xl"
          quality={100}
        />
        <div className="absolute inset-0 bg-blue-800 opacity-50 rounded-t-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
          TRANSFORM YOUR BUSINESS WITH EXPERT SOLUTIONS. CONTACT US!
        </h2>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-800 font-bold text-lg py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 hover:scale-105 transition-transform"
        >
          CONTACT US <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
