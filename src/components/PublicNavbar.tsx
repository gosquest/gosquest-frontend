"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const PublicNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="p-4 fixed top-0 left-0 w-full h-[100px] bg-main text-white flex items-center justify-center z-50">
      <div className="container flex items-center justify-between">
        <h4 className="text-lg font-bold">GosQuest</h4>

        <div className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div
          className={`flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center fixed lg:static top-[100px] right-0 w-[70%] sm:w-[50%] lg:w-auto bg-main lg:bg-transparent transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 shadow-lg lg:shadow-none`}
        >
          <Link href="/about" className="p-4 lg:p-0">
            About
          </Link>
          <Link href="/contact" className="p-4 lg:p-0">
            Contact
          </Link>
          <Link href="/login" className="p-4 lg:p-0">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicNavbar;
