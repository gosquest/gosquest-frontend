"use client";
import { useState, useEffect } from "react";
import { Nav } from "./ui/nav";
import Logo from "../../public/svg/logo.svg";
import qn from "../../public/icons/qn.png";
import add from "../../public/icons/add.png"

import {
   ShoppingCart,
   LayoutDashboard,
   UsersRound,
   Settings,
   ChevronRight,
   Box,
   List,
   BarChart,
   GitBranchIcon,
   UsersIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";

export default function SideNavbar() {
   const [isCollapsed, setIsCollapsed] = useState(false);
   const [isClient, setIsClient] = useState(false);
   const onlyWidth = useWindowWidth();
   const mobileWidth = onlyWidth < 768;

   useEffect(() => {
      setIsClient(true);
   }, []);

   function toggleSidebar() {
      setIsCollapsed(!isCollapsed);
   }

   if (!isClient) {
      return null;
   }

   return (
      <div className="relative min-w-[80px] border-r px-3 pb-10 pt-6 bg-main flex justify-between flex-col z-40 text-white">
         {!mobileWidth && (
            <div className="absolute right-[-20px] top-7">
               <Button
                  onClick={toggleSidebar}
                  variant="secondary"
                  className="rounded-full p-2"
               >
                  <ChevronRight />
               </Button>
            </div>
         )}
         <div className="flex items-center justify-center flex-col gap-2">
            <Image
               src={Logo}
               alt="logo"
            />
            <h4 className="text-center">RCA Rating System</h4>
         </div>
         <Button className="bg-white rounded-full text-main gap-2 p-6 hover:text-white"><Image src={add} alt="create"/>Create new project</Button>
         <Nav
            isCollapsed={mobileWidth ? true : isCollapsed}
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
         <div className="">
            <div className="flex rounded-full p-2 bg-white mb-4 gap-2 items-center">
               <div className="bg-gray-400 text-main rounded-full w-6 h-6 flex items-center justify-center">I</div>
               <p className="text-main">Mukarusine Liliane</p>
            </div>
            <div>
               <div className="flex items-center justify-center rounded-full p-2 bg-white w-10 h-10">
                  <Image
                     src={qn}
                     alt="qn"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
