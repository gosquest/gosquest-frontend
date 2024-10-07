"use client";

import { User, LogOut } from "lucide-react";
import React, { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useRouter, usePathname } from "next/navigation";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const MobileNav = () => {
   const { user } = useAuthStore();
   const router = useRouter();
   const pathname = usePathname(); // Get the current pathname
   const [isLoggingOut, setIsLoggingOut] = useState(false);
   const [isDialogOpen, setDialogOpen] = useState(false);

   const handleLogout = () => {
      setIsLoggingOut(true);
      cookies.remove("token");
      router.push("/");
      setIsLoggingOut(false);
   };

   return (
      <div className="bg-main mb-6 p-4 text-white md:hidden sticky top-0 w-full">
         <div className="flex justify-between mb-3">
            <div>
               <h3>Hello 👋,</h3>
               <small>{user.fullName}</small>
            </div>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <div className="bg-main flex items-center justify-center p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 border border-white cursor-pointer">
                     <User className="text-white w-5 h-5" />
                  </div>
               </DropdownMenuTrigger>
               <DropdownMenuContent className="w-20 bg-white text-main p-2">
                  <DropdownMenuGroup>
                     <DropdownMenuItem asChild>
                        <Dialog>
                           <DialogTrigger className="!rounded flex items-center pl-2">
                              <LogOut className="mr-2 h-4 w-4" />
                              <span className="">Log out</span>
                           </DialogTrigger>
                           <DialogContent className="bg-white">
                              <DialogHeader>
                                 <DialogTitle>Confirm Logout</DialogTitle>
                                 <DialogDescription>
                                    Are you sure you want to log out? This
                                    action will end your session.
                                 </DialogDescription>
                              </DialogHeader>
                              <div className="flex items-center justify-center gap-4">
                                 <Button
                                    variant="outline"
                                    onClick={() => setDialogOpen(false)}
                                 >
                                    Cancel
                                 </Button>
                                 <Button
                                    onClick={handleLogout}
                                    disabled={isLoggingOut}
                                    className="bg-main"
                                 >
                                    {isLoggingOut ? "Logging out..." : "Logout"}
                                 </Button>
                              </div>
                           </DialogContent>
                        </Dialog>
                     </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
               </DropdownMenuContent>
            </DropdownMenu>
         </div>

         <div className="bg-input rounded p-1 flex justify-between items-center space-x-1">
            <Link
               href="/dashboard"
               className={`px-4 py-2 rounded whitespace-nowrap text-sm ${pathname === "/dashboard" ? "bg-main text-white" : "bg-transparent text-main hover:bg-main hover:text-white"
                  } flex-1 text-center`}
            >
               Unrated Projects
            </Link>
            <Link
               href="/dashboard/rated-projects"
               className={`px-4 py-2 rounded whitespace-nowrap text-sm ${pathname === "/dashboard/rated-projects" ? "bg-main text-white" : "bg-transparent text-main hover:bg-main hover:text-white"
                  } flex-1 text-center`}
            >
               Rated Projects
            </Link>
         </div>
      </div>
   );
};

export default MobileNav;