"use client";

import DashboardNavbar from "@/components/DashbboardNavbar";
import SideNavbar from "@/components/SideNavbar";
import { useSidebarState } from "@/hooks/useSidebarState";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed } = useSidebarState();

  return (
    <div className="min-h-screen w-full bg-background text-black flex">
      <SideNavbar />
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "ml-[80px]" : "ml-[240px]"
        } w-full`}
      >
        <DashboardNavbar />
        <div className="p-8 pt-[100px]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
