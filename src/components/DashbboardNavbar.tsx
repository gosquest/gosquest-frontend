"use client";

import React from "react";
import { Blocks } from "lucide-react";
import { useSidebarState } from "@/hooks/useSidebarState";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";

const DashboardNavbar = () => {
   const { isCollapsed, mobileWidth, isClient, toggleSidebar } =
      useSidebarState();
   const { user } = useAuthStore()

   if (!isClient) {
      return null;
   }
   return (
      <main
         className={`flex items-center justify-between shadow py-4  sticky top-0 bg-white z-30 transition-al duration-300 px-8 ${mobileWidth ? "hidden" : isCollapsed ? "" : ""
            }`}
      >
         <section className="flex flex-col items-start">
            <h3 className="text-lg font-semibold">Welcome back 👋,</h3>
            <small className="text-sm">{user && user.fullName}</small>
         </section>

         <section className="flex gap-4 items-center justify-center">
            <Link href={'/admin/projects'} className="flex bg-main rounded-full gap-2 items-center p-2 text-white w-auto px-4">
               <Blocks className="w-4 h-4" />
               <small className="text-xs sm:text-sm">View All Projects</small>
            </Link>
         </section>
      </main>
   );
};

export default DashboardNavbar;