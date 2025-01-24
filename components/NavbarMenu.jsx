"use client";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const NavbarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu

  // Close the menu if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Menu Button */}
      <div className="text-white">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          ref={menuRef} // Attach the ref to the menu
          className="absolute top-12 right-7 rounded-xl w-48 bg-black text-white p-4 shadow-lg z-50"
        >
          <ul className="space-y-4 text-lg">
            <li>
              <Link href="/" className="font-medium hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="font-medium hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="font-medium hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="font-medium hover:text-gray-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="font-medium hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
