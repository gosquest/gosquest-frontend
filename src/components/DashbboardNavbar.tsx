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
   const pathname = usePathname(); // Get the current path

   if (!isClient) {
      return null;
   }

   // Check if the user is in the dashboard or admin panel
   const isDashboard = pathname.includes("/dashboard");
   const buttonText = isDashboard ? "View Unrated Projects" : "View All Projects";
   const buttonLink = isDashboard ? "/dashboard" : "/admin/projects";

   return (
      <main
         className={`flex items-center justify-between shadow py-4 sticky top-0 bg-white z-30 transition-all duration-300 px-8 ${
            mobileWidth ? "hidden" : isCollapsed ? "" : ""
         }`}
      >
         <section className="flex flex-col items-start">
            <h3 className="text-lg font-semibold">Welcome 👋,</h3>
            <small className="text-sm">{user && user.fullName}</small>
         </section>

         <section className="flex gap-4 items-center justify-center">
            <Link href={buttonLink} className="flex bg-main rounded gap-2 items-center p-2 text-white w-auto px-4">
               <Blocks className="w-4 h-4" />
               <small className="text-xs sm:text-sm">{buttonText}</small>
            </Link>
         </section>
      </main>
   );
};

export default DashboardNavbar;
