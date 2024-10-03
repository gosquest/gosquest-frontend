"use client";
import React, { useState } from "react";
import { BellDot, User, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
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
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";
import Link from "next/link";

const cookies = new Cookies();

const MobileNav = () => {
  const { user } = useAuthStore();
  const router = useRouter();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    cookies.remove("token");
    router.push("/");
    setIsLoggingOut(false);
  };

  return (
    <div className="bg-main -mt-8 -ml-8 -mr-8 mb-10 p-8 sm:p-10 text-white md:hidden">
      <div className="flex justify-between mb-3">
        <div>
          <h3>Hello👋</h3>
          <small>{user.fullName}</small>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="bg-main flex items-center justify-center p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 border border-white cursor-pointer">
              <User className="text-white w-5 h-5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-white text-main">
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex items-center cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white">
                  <DialogHeader>
                    <DialogTitle>Confirm Logout</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to log out? This action will end your session.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex gap-2 items-center justify-center pt-2">
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleLogout} disabled={isLoggingOut}>
                      {isLoggingOut ? "Logging out..." : "Logout"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="bg-background rounded-xl p-2 flex justify-between items-center sm:p-4">
        <Button className="bg-main rounded-xl px-2">
          <Link href="/dashboard">Unrated projects</Link>
        </Button>
        <Button className="rounded-xl px-2 bg-transparent text-main hover:bg-main hover:text-white">
          <Link href="/dashboard/rated-projects">Rated projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;
