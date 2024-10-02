import DashboardNavbar from "@/components/DashbboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="min-h-screen w-full bg-background text-black flex ">
         <DashboardSidebar />
         <DashboardNavbar />
         <div className=" w-full">{children}</div>
      </div>
   );
};

export default layout;