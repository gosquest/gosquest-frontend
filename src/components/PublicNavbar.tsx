"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import UserIcon from "../../public/assets/User.svg";

interface MobileMenuProps {
  menuOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, onClose }) => {
   return (
     <div
       className={`fixed top-0 right-0 w-[80%] sm:w-[60%] bg-white text-main flex flex-col items-center p-8 z-40 transition-transform duration-300 ease-in-out lg:hidden ${
         menuOpen ? "translate-x-0" : "translate-x-full"
       } shadow-lg`}
     >
       <button onClick={onClose} className="self-end mb-4 cursor-pointer">
         <X size={28} />
       </button>
       <nav className="flex flex-col gap-6 text-lg">
         <Link href="/" onClick={onClose}>
           Home
         </Link>
         <Link href="/about" onClick={onClose}>
           About
         </Link>
         <Link href="/contact" onClick={onClose}>
           Contact
         </Link>
         <Link href="/games" onClick={onClose}>
           Games
         </Link>
         <Link href="/login" onClick={onClose}>
           Login
         </Link>
       </nav>
     </div>
   );
 };
const PublicNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-[100px] flex justify-center items-center">
      <nav className="flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" className="w-[40px] h-auto" />
          <div className="hidden lg:flex pl-16 gap-x-14">
            <Link href="/" className="text-[#36485C] font-medium">
              Home
            </Link>
            <Link href="/about" className="text-[#36485C] font-medium">
              About
            </Link>
            <Link href="/contact" className="text-[#36485C] font-medium">
              Contact
            </Link>
            <Link href="/games" className="text-[#36485C] font-medium">
              Games
            </Link>
          </div>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-x-10">
          <Link href="/signup" className="text-[#36485C] font-medium">
            Sign Up
          </Link>
          <div className="flex items-center gap-x-2">
            <Image src={UserIcon} alt="User Profile" className="w-[24px] h-auto" />
            <Link href="/login" className="text-[#36485C] font-medium">
              Sign in
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <Menu size={28} />
        </div>

        {/* MobileMenu component */}
        <MobileMenu menuOpen={menuOpen} onClose={closeMenu} />
      </nav>
    </div>
  );
};

export default PublicNavbar;
