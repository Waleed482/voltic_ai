import React from "react";
import Image from "next/image";
import BacgroundImage from "@/public/homeImages/herosection-background-image.png";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Link from "next/link";

const ContactNow = () => {
  return (
    <>
      <div className="bg-black py-10">
        <section className="relative rounded-3xl bg-blue-800 text-white py-16">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={BacgroundImage}
              alt="Background"
              fill
              className="object-cover opacity-100"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-blue-800 opacity-10"></div>
          </div>

          {/* Heading */}
          <div className="relative px-6 sm:px-12  text-white text-center py-8">
            <p className="text-[63.7px] font-bold leading-snug tracking-wide">
              TRANSFORM YOUR BUSINESS WITH <br /> EXPERT SOLUTIONS. CONTACT US!
            </p>
          </div>

          {/* Contact Button */}
          <div className="mt-8 flex justify-center text-center">
            <Link href="/contact-us">
              <button className="relative w-[295px] h-[76px] rounded-full bg-white text-[#3359E0] font-bold text-[31.88px] flex items-center justify-center hover:bg-gray-100 transition">
                CONTACT US <CallMadeIcon className="ml-2 font-bold w-[22px]" />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactNow;
