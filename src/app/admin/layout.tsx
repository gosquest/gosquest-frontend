"use client";
import DashboardNavbar from "@/components/DashbboardNavbar";
import SideNavbar from "@/components/SideNavbar";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
   const { roles } = useAuthStore();
   const router = useRouter();

   useEffect(() => {
      if (!roles) {
         router.push("/auth/login");
      }
      if (roles && !["Admin", "SuperAdmin"].includes(roles.name)) {
         router.push("/dashboard");
      }
   }, [roles]);

   return (
      <div className="h-[100vh] w-full bg-white text-black flex overflow-y-hidden">
         <SideNavbar />
         <div className="flex flex-col w-full">
            <DashboardNavbar />
            <div className="p-8 bg-white w-full overflow-y-auto">
               {children}
            </div>
         </div>
      </div>
   );
};

export default AdminLayout;
