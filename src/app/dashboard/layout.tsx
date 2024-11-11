import DashboardNavbar from "@/components/DashbboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="h-[100vh] w-full  flex overflow-y-hidden">
         <DashboardSidebar />
         <div className="flex flex-col w-full">
            <DashboardNavbar />
            <div className="md:p-6 w-full overflow-y-auto">{children}</div>
         </div>
      </div>
   );
};

export default DashboardLayout;
