"use client";

import { User, LogOut } from "lucide-react";
import React, { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

const cookies = new Cookies();

const MobileNav = () => {
   const { user } = useAuthStore();
   const router = useRouter();
   const [isLoggingOut, setIsLoggingOut] = useState(false);
   const [isDialogOpen, setDialogOpen] = useState(false);

   const handleLogout = () => {
      setIsLoggingOut(true);
      cookies.remove("token");
      router.push("/");
      setIsLoggingOut(false);
   };

   return (
      <div className="bg-main mb-6 p-4 text-white md:hidden">
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
                           <DialogTrigger asChild>
                              <div className="cursor-pointer flex items-center">
                                 <LogOut className="mr-2 h-4 w-4" />
                                 <span className="font-bold">Log out</span>
                              </div>
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

         <div className="bg-input rounded p-4 flex justify-between items-center">
            <Link
               href="/dashboard"
               className="px-4 py-2 bg-main rounded whitespace-nowrap"
            >
               Unrated Projects
            </Link>
            <Link
               href="/dashboard/rated-projects"
               className="px-4 py-2 rounded bg-transparent text-main whitespace-nowrap hover:bg-main hover:text-white"
            >
               Rated Projects
            </Link>
         </div>
      </div>
   );
};

export default MobileNav;
