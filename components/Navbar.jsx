import Link from "next/link";
import Image from "next/image";
import Icon from "@/public/icon.png";

import NavbarMenu from "./NavbarMenu";
const Navbar = () => {
  return (
    <>
      <nav className="bg-black text-white h-[60px] flex justify-between ">
        <div className="w-full custom-container flex justify-between   items-center">
          <div className="flex items-center mt-5 ">
            <Link href="/">
            <Image src={Icon} alt="Logo" width={48.17} height={38} priority />
            </Link>
          </div>

          <div className="w-1/2 ">
            <div className="flex lg:hidden justify-end">
              <NavbarMenu />
            </div>

            <ul className="space-x-8 text-lg  justify-between hidden lg:flex  ">
              <li>
                <Link href="/" className="font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="font-medium whitespace-nowrap">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#services" className="font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="font-medium">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
