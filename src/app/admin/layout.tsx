import DashboardNavbar from "@/components/DashbboardNavbar";
import SideNavbar from "@/components/SideNavbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="h-[100vh] w-full bg-white text-black flex overflow-y-hidden">
         <SideNavbar />
         <div className="flex flex-col w-full">
            <DashboardNavbar />
            <div className="p-8 w-full overflow-y-auto">{children}</div>
         </div>
      </div>
   );
};

export default layout;