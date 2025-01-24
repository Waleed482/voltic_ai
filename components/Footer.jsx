import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/icon.png";
import link from "@/public/imageFooter/link.png";
import insta from "@/public/imageFooter/insta.png";
import pin from "@/public/imageFooter/pin.png";
import tweeter from "@/public/imageFooter/tweeter.png";
import you from "@/public/imageFooter/you.png";

const Footer = () => {
  // Social Links Data
  const socialLinks = [
    { href: "#", src: link, alt: "LinkedIn" },
    { href: "#", src: insta, alt: "Instagram" },
    { href: "#", src: pin, alt: "Pinterest" },
    { href: "#", src: you, alt: "YouTube" },
    { href: "#", src: tweeter, alt: "Twitter" },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Contact Section */}
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={60} height={60} />
          </Link>
          <p className="text-lg font-normal mt-4">Voltic.inc</p>
          <p className="text-lg font-normal">info@voltic.agency</p>
        </div>

        {/* Office Info Section */}
        <div className="text-center md:text-left">
          <h3 className="text-[20px] font-bold">OUR OFFICE</h3>
          <p className="text-[19px] font-normal mt-4">
            Meezan Executive Tower<br />
            Liaqat Road, Faisalabad<br />
            8th floor, 1st & 2nd Office
          </p>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col items-end ">
          <h3 className="text-[20px] font-bold relative right-44">FOLLOW US</h3>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((linkData, index) => (
              <Link key={index} href={linkData.href} aria-label={linkData.alt}>
                <Image
                  src={linkData.src}
                  alt={linkData.alt}
                  width={48}
                  height={48}
                  className="hover:opacity-80"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className=" max-w-7xl  mx-auto  px-6 mt-8 pt-4 flex flex-col md:flex-row justify-between items-start text-gray-400 text-[20px]">
        <p>© 2025 All rights are reserved</p>
        <Link href="#" className="hover:text-white ">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
