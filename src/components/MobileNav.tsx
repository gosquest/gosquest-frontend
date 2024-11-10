import React, { useState } from "react";
import { User, LogOut } from "lucide-react";
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
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter, usePathname } from "next/navigation";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const MobileNav = () => {
   const { user } = useAuthStore();
   const router = useRouter();
   const pathname = usePathname();
   const [isLoggingOut, setIsLoggingOut] = useState(false);
   const [isDialogOpen, setIsDialogOpen] = useState(false);

   const handleLogout = () => {
      setIsLoggingOut(true);
      cookies.remove("token");
      router.push("/");
      setIsLoggingOut(false);
   };

   return (
      <div className="bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500 mb-6 p-4 text-white md:hidden sticky top-0 w-full z-40">
         <div className="flex justify-between mb-3">
            <div>
               <h3>Hello 👋,</h3>
               <small>{user && user.fullName}</small>
            </div>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <div className="bg-main flex items-center justify-center p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 border border-white cursor-pointer">
                     <User className="text-white w-5 h-5" />
                  </div>
               </DropdownMenuTrigger>
               <DropdownMenuContent className="mr-6">
                  <DropdownMenuGroup>
                     <DropdownMenuItem asChild>
                        <div
                           onClick={() => setIsDialogOpen(true)}
                           className=" flex items-center pl-2 bg-transparent border-none text-main cursor-pointer"
                        >
                           <LogOut className="mr-2 h-4 w-4" />
                           <span className="">Log out</span>
                        </div>
                     </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
         <Dialog
            open={isDialogOpen}
            onOpenChange={setIsDialogOpen}
         >
            <DialogContent
               className="bg-white p-[2px] w-[90%] sm:max-w-[425px]"
               style={{
                  backgroundImage:
                     "linear-gradient(white, white), linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
               }}
            >
               <DialogHeader>
                  <DialogTitle className="p-4 text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">
                     Confirm Logout
                  </DialogTitle>
                  <DialogDescription className="px-4">
                     Are you sure you want to log out? This action will end your
                     session.
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

         <div className="bg-input rounded p-1 flex justify-between items-center space-x-1">
            <Link
               href="/dashboard"
               className={`px-4 py-2 rounded whitespace-nowrap text-sm ${
                  pathname === "/dashboard"
                     ? "bg-main text-white"
                     : "bg-transparent text-main hover:bg-main hover:text-white"
               } flex-1 text-center`}
            >
               Dashboard
            </Link>
            <Link
               href="/dashboard/liked-websites"
               className={`px-4 py-2 rounded whitespace-nowrap text-sm ${
                  pathname === "/dashboard/liked-websites"
                     ? "bg-main text-white"
                     : "bg-transparent text-main hover:bg-main hover:text-white"
               } flex-1 text-center`}
            >
               Liked Websites
            </Link>
         </div>
      </div>
   );
};

export default MobileNav;
