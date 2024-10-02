import DashboardNavbar from "@/components/DashbboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="h-[100vh] w-full bg-white text-black flex overflow-y-hidden">
         <DashboardSidebar />
         <div className="flex flex-col w-full">
            <DashboardNavbar />
            <div className="p-6 w-full overflow-y-auto">{children}</div>
         </div>
      </div>
   );
};

export default layout;
