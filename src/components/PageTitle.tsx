/** @format */

import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

export default function PageTitle({ title, className }: Props) {
  return <h1 className={cn("text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200", className)}>{title}</h1>;
}
