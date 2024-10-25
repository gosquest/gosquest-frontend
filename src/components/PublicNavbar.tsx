"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

interface MobileMenuProps {
   menuOpen: boolean;
   onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, onClose }) => {
   return (
      <div
         className={`fixed top-0 right-0 w-[80%] sm:w-[60%] bg-main text-white flex flex-col items-center p-8 z-40 transition-transform duration-300 ease-in-out md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
         } shadow-lg`}
      >
         <button
            onClick={onClose}
            className="self-end mb-4"
         >
            <X size={28} />
         </button>
         <nav className="flex flex-col gap-6 text-lg">
            <Link
               href="/"
               onClick={onClose}
            >
               Home
            </Link>
            <Link
               href="/about"
               onClick={onClose}
            >
               About
            </Link>
            <Link
               href="/contact"
               onClick={onClose}
            >
               Contact
            </Link>
            <Link
               href="/games"
               onClick={onClose}
            >
               Games
            </Link>
            <Link
               href="/login"
               onClick={onClose}
            >
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
      <div className="p-4 fixed top-0 left-0 w-full h-[100px] bg-main text-white flex items-center justify-center z-50">
         <div className="container flex items-center justify-between">
            <h4 className="text-lg font-bold">GosQuest</h4>

            <div
               className="lg:hidden"
               onClick={toggleMenu}
            >
               <Menu size={28} />
            </div>

            {/* MobileMenu component */}
            <MobileMenu
               menuOpen={menuOpen}
               onClose={closeMenu}
            />

            {/* Desktop Links */}
            <div className="hidden lg:flex gap-8 items-center">
               <Link
                  href="/"
                  className="p-4 lg:p-0"
               >
                  Home
               </Link>
               <Link
                  href="/about"
                  className="p-4 lg:p-0"
               >
                  About
               </Link>
               <Link
                  href="/contact"
                  className="p-4 lg:p-0"
               >
                  Contact
               </Link>
               <Link
                  href="/games"
                  className="p-4 lg:p-0"
               >
                 Games
               </Link>
               <Link
                  href="/login"
                  className="p-4 lg:p-0"
               >
                  Login
               </Link>
            </div>
         </div>
      </div>
   );
};

export default PublicNavbar;
