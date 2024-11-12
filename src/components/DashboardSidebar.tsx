"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Nav } from "./ui/nav";
import Logo from "../../public/assets/Logo.svg";
import {
   ChevronRight,
   LogOutIcon,
   FolderKanban,
   FolderOpenDot,
   Globe,
   Youtube,
} from "lucide-react";
import { useSidebarState } from "@/hooks/useSidebarState";
import { useState } from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import Link from "next/link";

const cookies = new Cookies();

export default function DashbboardNavbar() {
   const { isCollapsed, mobileWidth, isClient, toggleSidebar } =
      useSidebarState();
   const router = useRouter();
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [isLoggingOut, setIsLoggingOut] = useState(false);

   if (!isClient) {
      return null;
   }

   const handleLogout = () => {
      setIsLoggingOut(true);
      cookies.remove("auth-token");
      router.push("/");
      setIsLoggingOut(false);
   };
   return (
      <div
         className={`sticky top-0 min-w-[80px] max-w-[240px] border-r max-h-screen px-3 pb-10 pt-6 bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500 flex flex-col justify-between z-40 text-white transition-all duration-300 ease-in-out
         ${mobileWidth ? "hidden" : isCollapsed ? "w-[120px]" : "w-[270px]"}`}
      >
         {!mobileWidth && (
            <div className="absolute right-[-20px] top-7">
               <Button
                  onClick={toggleSidebar}
                  variant="secondary"
                  className={`rounded-full bg-white hover:bg-white/90 p-2 `}
               >
                  <ChevronRight
                     className={`${isCollapsed ? "rotate-180" : ""}`}
                  />
               </Button>
            </div>
         )}

         <div
            className={`flex items-center justify-center flex-col gap-2 transition-all duration-300`}
         >
            <Link href="/">
            <Image
               src={Logo}
               alt="logo"
               className="rounded"
            />
            </Link>
            {!isCollapsed && <h4 className="text-center text-sm">GosQuest</h4>}
         </div>
         <Nav
            isCollapsed={isCollapsed}
            links={[
               {
                  title: "Dashboard",
                  href: "/dashboard",
                  icon: FolderKanban,
                  variant: "ghost",
               },
               {
                  title: "Websites",
                  href: "/dashboard/websites",
                  icon: Globe,
                  variant: "ghost",
               },
               {
                  title: "Liked Websites",
                  href: "/dashboard/liked-websites",
                  icon: Globe,
                  variant: "ghost",
               },
               {
                  title: "Youtube Channels",
                  href: "/dashboard/yt-channels",
                  icon: Youtube,
                  variant: "ghost",
               },
            ]}
         />

         <div className="flex flex-col gap-4">
            <Dialog
               open={isDialogOpen}
               onOpenChange={setIsDialogOpen}
            >
               <DialogTrigger asChild>
                  <Button
                     variant="secondary"
                     className="flex items-center gap-2"
                  >
                     <LogOutIcon className="w-5 h-5" />
                     <span>Logout</span>
                  </Button>
               </DialogTrigger>

               <DialogContent
                  className="w-[90%] sm:max-w-[425px] bg-white p-[2px]"
                  style={{
                     backgroundImage:
                        "linear-gradient(white, white), linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                     backgroundOrigin: "border-box",
                     backgroundClip: "content-box, border-box",
                  }}
               >
                  <DialogHeader>
                     <DialogTitle className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200 p-4">
                        Confirm Logout
                     </DialogTitle>
                     <DialogDescription className="px-4">
                        Are you sure you want to log out? This action will end
                        your session.
                     </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center justify-start gap-4 p-4">
                     <Button
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                     >
                        Cancel
                     </Button>
                     <Button
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        className="bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500"
                     >
                        {isLoggingOut ? "Logging out..." : "Logout"}
                     </Button>
                  </div>
               </DialogContent>
            </Dialog>
         </div>
      </div>
   );
}
