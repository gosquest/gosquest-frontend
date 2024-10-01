"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Nav } from "./ui/nav";
import Logo from "../../public/svg/logo.svg";
import qn from "../../public/icons/qn.png";
import add from "../../public/icons/add.png";
import {
  ChevronRight,
  LayoutDashboard,
  Box,
  List,
  BarChart,
  GitBranchIcon,
  UsersIcon,
  Settings,
} from "lucide-react";
import { useSidebarState } from "@/hooks/useSidebarState";
import DashboardNavbar from "./DashbboardNavbar";


export default function SideNavbar() {
  const { isCollapsed, mobileWidth, isClient, toggleSidebar } =
    useSidebarState();

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`relative min-w-[80px] max-w-[240px] border-r max-h-screen px-3 pb-10 pt-6 bg-main flex flex-col justify-between z-40 text-white transition-all duration-300 ease-in-out
         ${mobileWidth ? "hidden" : isCollapsed ? "w-[80px]" : "w-[240px]"}`}
    >
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
          >
            <ChevronRight className={`${isCollapsed ? "rotate-180" : ""}`} />
          </Button>
        </div>
      )}

      <div
        className={`flex items-center justify-center flex-col gap-2 transition-all duration-300 ${
          isCollapsed ? "hidden" : "block"
        }`}
      >
        <Image src={Logo} alt="logo" />
        {!isCollapsed && <h4 className="text-center">RCA Rating System</h4>}
      </div>

      <Button
        className={`bg-white rounded-full text-main gap-2 p-1 hover:text-white transition-all duration-300 ${
          isCollapsed && "mt-12"
        }`}
      >
        <Image src={add} alt="create" />
        {!isCollapsed && "Create new project"}
      </Button>

      <Nav
            isCollapsed={isCollapsed}
            links={[
               {
                  title: "Dashboard",
                  href: "/admin",
                  icon: LayoutDashboard,
                  variant: "default",
               },
               {
                  title: "Projects",
                  href: "/admin/projects",
                  icon: Box,
                  variant: "ghost",
               },
               {
                  title: "Rating",
                  href: "/admin/rating",
                  icon: List,
                  variant: "ghost",
               },
               {
                  title: "Statistics",
                  href: "/admin/statistics",
                  icon: BarChart,
                  variant: "ghost",
               },
               {
                  title: "Time log",
                  href: "/admin/time-log",
                  icon: BarChart,
                  variant: "ghost",
               },
               {
                  title: "Resource mgnt",
                  href: "/admin/resource-mgnt",
                  icon: GitBranchIcon,
                  variant: "ghost",
               },
               {
                  title: "Feedbacks",
                  href: "/admin/feedbacks",
                  icon: UsersIcon,
                  variant: "ghost",
               },
               {
                  title: "Menu Settings",
                  href: "/admin/settings",
                  icon: Settings,
                  variant: "ghost",
               },
            ]}
         />

      <div className="flex flex-col gap-4">
        <div
          className={`flex items-center gap-2 bg-white p-2 rounded-full transition-all duration-300 ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <div className="bg-gray-400 text-main rounded-full w-6 h-6 flex items-center justify-center">
            I
          </div>

          <p
            className={`text-main transition-all duration-300 ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            Mukarusine Liliane
          </p>
        </div>

        <div
          className={`flex items-center justify-center rounded-full p-2 bg-white w-8 h-8 ${
            isCollapsed ? "ml-2" : ""
          }`}
        >
          <Image src={qn} alt="qn" />
        </div>
      </div>
    </div>
  );
}
