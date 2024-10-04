"use client"

import { BellDot } from "lucide-react";
import React from "react";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";

const MobileNav = () => {
   const { user } = useAuthStore()
   return (
      <div className="bg-main  mb-6 p-4 text-white md:hidden">
         <div className="flex justify-between mb-3">
            <div>
               <h3>Hello 👋,</h3>
               <small>{user.fullName}</small>
            </div>
            <div className="bg-main flex items-center justify-center p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 border border-white">
               <BellDot className="text-white w-5 h-5" />
            </div>
         </div>

         <div className="bg-input rounded p-4 flex justify-between items-center">
            <Link href='/dashboard' className="px-4 py-2 bg-main rounded whitespace-nowrap">Unrated Projects</Link>
            <Link href={'/dashboard/rated-project'} className="px-4 py-2 rounded bg-transparent text-main whitespace-nowrap hover:bg-main hover:text-white">Rated projects</Link>
         </div>
      </div>
   );
};

export default MobileNav;
