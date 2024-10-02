/** @format */

"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { usePathname } from "next/navigation";

interface NavLink {
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  href: string;
}

interface NavProps {
  isCollapsed: boolean;
  links: NavLink[];
}

const NavLinkItem = ({
  link,
  isActive,
  isCollapsed,
}: {
  link: NavLink;
  isActive: boolean;
  isCollapsed: boolean;
}) => {
  const baseClasses = cn(
    buttonVariants({ variant: isActive ? "default" : "ghost", size: isCollapsed ? "icon" : "sm" }),
    isActive ? "bg-white text-black hover:bg-input" : ""
  );

  return isCollapsed ? (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild className="w-full border-[0.75px] !rounded">
        <Link href={link.href} className={`${baseClasses} h-9 rounded`}>
          <link.icon className="h-5 w-5" />
          <span className="sr-only">{link.title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        {link.title}
        {link.label && <span className="ml-auto text-muted-foreground">{link.label}</span>}
      </TooltipContent>
    </Tooltip>
  ) : (
    <Link href={link.href} className={`${baseClasses} !justify-start rounded w-full`}>
      <link.icon className="mr-2 h-4 w-4" />
      {link.title}
      {link.label && <span className="ml-auto">{link.label}</span>}
    </Link>
  );
};

export function Nav({ links, isCollapsed }: NavProps) {
  const pathName = usePathname();

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className=""
      >
        <nav className={`grid gap-1 space-y-2 ${isCollapsed ? "w-[70%] mx-auto" : ""}`}>
          {links.map((link, index) => {
            const isActive = link.href === pathName;
            return (
              <NavLinkItem
                key={index}
                link={link}
                isActive={isActive}
                isCollapsed={isCollapsed}
              />
            );
          })}
        </nav>
      </div>
    </TooltipProvider>
  );
}