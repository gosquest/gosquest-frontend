"use client";
import React from "react";
import { Input } from "./ui/input";
import { BellDot, Blocks, Search } from "lucide-react";
import { useSidebarState } from "@/hooks/useSidebarState";

const DashboardNavbar = () => {
   const { isCollapsed, mobileWidth, isClient, toggleSidebar } =
      useSidebarState();

   if (!isClient) {
      return null;
   }
   return (
      <div
         className={`w-full flex flex-wrap items-center gap-6 justify-between shadow py-4  fixed top-0 bg-white z-30 transition-all duration-300 
         ${
            mobileWidth ? "hidden" : isCollapsed ? "pl-[100px]" : "pl-[260px]"
         } pr-8`}
      >
         <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold">Welcome back 👋,</h3>
            <small className="text-sm">Mrs. Mukarusine</small>
         </div>

         <div className="flex gap-4 items-center justify-center">
            <div className="border border-main rounded-full p-2 flex items-center gap-2 h-10">
               <Search className="w-5 h-5" />
               <Input
                  className="border-none outline-none w-[200px] sm:w-[150px] md:w-[200px] bg-transparent"
                  placeholder="search..."
               />
            </div>

            <div className="bg-main flex items-center justify-center p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10">
               <BellDot className="text-white w-5 h-5" />
            </div>

            <div className="flex bg-main rounded-full gap-2 items-center p-2 text-white w-auto px-4">
               <Blocks className="w-4 h-4" />
               <small className="text-xs sm:text-sm">View All Projects</small>
            </div>
         </div>
      </div>
   );
};

export default DashboardNavbar;