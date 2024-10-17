"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Nav } from "./ui/nav";
import Logo from "../../public/svg/logo.svg";
import add from "../../public/icons/add.png";
import { ChevronRight, LayoutDashboard, Box, List, UsersIcon, Settings, LogOutIcon, Shield } from "lucide-react";
import { useSidebarState } from "@/hooks/useSidebarState";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import Link from "next/link";

const cookies = new Cookies()

export default function SideNavbar() {
   const { isCollapsed, mobileWidth, isClient, toggleSidebar } = useSidebarState();
   const router = useRouter();
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   
   const [isLoggingOut, setIsLoggingOut] = useState(false)

   if (!isClient) {
      return null;
   }

   const handleLogout = () => {
      setIsLoggingOut(true)
      cookies.remove('token')
      router.push("/");
      setIsLoggingOut(false)
   };

   return (
      <div
         className={`sticky top-0 min-w-[80px] max-w-[240px] border-r max-h-screen px-3 pb-10 pt-6 bg-main flex flex-col justify-between z-40 text-white transition-all duration-300 ease-in-out
         ${mobileWidth ? "hidden" : isCollapsed ? "w-[120px]" : "w-[270px]"}`}
      >
         {!mobileWidth && (
            <div className="absolute right-[-20px] top-7">
               <Button
                  onClick={toggleSidebar}
                  variant="secondary"
                  className={`rounded-full bg-white hover:bg-white/90 p-2 ${isCollapsed ? "bg-main text-white hover:bg-main/90" : ""}`}
               >
                  <ChevronRight className={`${isCollapsed ? "rotate-180" : ""}`} />
               </Button>
            </div>
         )}

         <div className={`flex items-center justify-center flex-col gap-2 transition-all duration-300`}>
            {/* <Image src={Logo} alt="logo" className="rounded" /> */}
            {!isCollapsed && <h4 className="text-center text-sm">GosQuest</h4>}
         </div>

         <Link href={'/admin/add-website'} className={`flex items-center justify-center bg-white rounded text-main hover:!bg-input transition-all duration-300 px-4 py-2.5 ${isCollapsed ? "w-[70%] mx-auto" : "space-x-3"}`}
         >
            <Image src={add} alt="add" className={`w-[20px] ${isCollapsed && ''}`} />
            <p className="text-sm">{!isCollapsed && "Add new website"}</p>
         </Link>

         <Nav
            isCollapsed={isCollapsed}
            links={[
               { title: "Dashboard", href: "/admin", icon: LayoutDashboard, variant: "default" },
               { title: "Websites", href: "/admin/websites", icon: Box, variant: "ghost" },
               { title: "Rating", href: "/admin/rating", icon: List, variant: "ghost" },
               { title: "Feedbacks", href: "/admin/feedbacks", icon: Shield, variant: "ghost" },
               { title: "Users", href: "/admin/users", icon: UsersIcon, variant: "ghost" },
            ]}
         />

         <div className="flex flex-col gap-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
               <DialogTrigger asChild>
                  <Button variant="secondary" className="flex items-center gap-2">
                     <LogOutIcon className="w-5 h-5" />
                     <span>Logout</span>
                  </Button>
               </DialogTrigger>

               <DialogContent className="sm:max-w-[425px] bg-white">
                  <DialogHeader>
                     <DialogTitle>Confirm Logout</DialogTitle>
                     <DialogDescription>
                        Are you sure you want to log out? This action will end your session.
                     </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                     <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                     <Button onClick={handleLogout} className="ml-2" disabled={isLoggingOut}>
                        {
                           isLoggingOut ? 'loggin out....' : 'Logout'
                        }
                     </Button>
                  </DialogFooter>
               </DialogContent>
            </Dialog>
         </div>
      </div>
   );
}