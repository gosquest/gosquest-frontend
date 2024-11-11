"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import UserIcon from "../../public/assets/User.svg";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
   menuOpen: boolean;
   onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, onClose }) => {
   const currentPath = usePathname();

   return (
      <div
         className={`fixed top-0 right-0 w-[80%] sm:w-[60%] bg-white text-main flex flex-col items-center p-8 z-40 transition-transform duration-300 ease-in-out lg:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
         } shadow-lg`}
      >
         <button onClick={onClose} className="self-end mb-4 cursor-pointer">
            <X size={28} className="text-main"/>
         </button>
         <nav className="flex flex-col gap-6 text-lg">
            <Link href="/" onClick={onClose} className={currentPath === "/" ? "text-blue-500 font-semibold" : "text-main"}>
               Home
            </Link>
            <Link href="/about" onClick={onClose} className={currentPath === "/about" ? "text-blue-500 font-semibold" : "text-main"}>
               About
            </Link>
            <Link href="/contact" onClick={onClose} className={currentPath === "/contact" ? "text-blue-500 font-semibold" : "text-main"}>
               Contact
            </Link>
            <Link href="/games" onClick={onClose} className={currentPath === "/games" ? "text-blue-500 font-semibold" : "text-main"}>
               Games
            </Link>
            <Link href="/login" onClick={onClose} className={currentPath === "/login" ? "text-blue-500 font-semibold" : "text-main"}>
               Login
            </Link>
         </nav>
      </div>
   );
};

const PublicNavbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const currentPath = usePathname();

   const toggleMenu = () => {
      setMenuOpen((prev) => !prev);
   };

   const closeMenu = () => {
      setMenuOpen(false);
   };

   return (
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-[100px] flex justify-center items-center">
         <nav className="flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-10">
            <div className="flex items-center">
               <div className="flex gap-1 items-center justify-center cursor-pointer">
                  <Image src={Logo} alt="Logo" className="w-[40px] h-auto" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-main text-lg">
                     GosQuest
                  </span>
               </div>

               <div className="hidden lg:flex pl-16 gap-x-14">
                  <Link href="/" className={currentPath === "/" ? "text-blue-500 font-semibold" : "text-main font-medium"}>
                     Home
                  </Link>
                  <Link href="/about" className={currentPath === "/about" ? "text-blue-500 font-semibold" : "text-main font-medium"}>
                     About
                  </Link>
                  <Link href="/contact" className={currentPath === "/contact" ? "text-blue-500 font-semibold" : "text-main font-medium"}>
                     Contact
                  </Link>
                  <Link href="/games" className={currentPath === "/games" ? "text-blue-500 font-semibold" : "text-main font-medium"}>
                     Games
                  </Link>
               </div>
            </div>

            <div className="hidden lg:flex items-center gap-x-10">
               <Link href="/signup" className="text-main font-medium">
                  Sign Up
               </Link>
               <div className="flex items-center gap-x-2">
                  <Image src={UserIcon} alt="User Profile" className="w-[24px] h-auto" />
                  <Link href="/login" className={currentPath === "/login" ? "text-blue-500 font-semibold" : "text-main font-medium"}>
                     Sign in
                  </Link>
               </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden cursor-pointer " onClick={toggleMenu}>
               <Menu size={28} />
            </div>

            {/* MobileMenu component */}
            <MobileMenu menuOpen={menuOpen} onClose={closeMenu} />
         </nav>
      </div>
   );
};

export default PublicNavbar;
