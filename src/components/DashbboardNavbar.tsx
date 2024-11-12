"use client";

import React from "react";
import { Blocks } from "lucide-react";
import { useSidebarState } from "@/hooks/useSidebarState";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
   const { isCollapsed, mobileWidth, isClient } = useSidebarState();
   const { user } = useAuthStore();
   const pathname = usePathname();

   if (!isClient) {
      return null;
   }

   const isDashboard = pathname.includes("/dashboard");
   const buttonText = "View All Websites";
   const buttonLink = isDashboard ? "/dashboard/websites" : "/admin/websites";

   return (
      <main
         className={`flex items-center justify-between shadow py-4 sticky top-0 bg-white z-30 transition-all duration-300 px-8 ${
            mobileWidth ? "hidden" : isCollapsed ? "" : ""
         }`}
      >
         <section className="flex flex-col items-start">
            <h3 className="text-lg font-semibold">Welcome 👋,</h3>
            <small className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">{user && user.fullName}</small>
         </section>

         <section className="flex gap-4 items-center justify-center">
            <Link
               href={buttonLink}
               className="flex bg-main rounded gap-2 items-center p-2 text-white w-auto px-4 bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500"
            >
               <Blocks className="w-4 h-4" />
               <small className="text-xs sm:text-sm">{buttonText}</small>
            </Link>
         </section>
      </main>
   );
};

export default DashboardNavbar;
