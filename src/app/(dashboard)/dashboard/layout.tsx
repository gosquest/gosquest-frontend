import DashboardNavbar from "@/components/DashbboardNavbar";
import SideNavbar from "@/components/SideNavbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="min-h-screen w-full bg-white text-black flex ">
         <SideNavbar />
         <DashboardNavbar />
         <div className="p-8 w-full">{children}</div>
      </div>
   );
};

export default layout;
