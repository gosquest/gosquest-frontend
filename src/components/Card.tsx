/** @format */

import React from "react";
import { cn } from "@/lib/utils";

export type CardProps = {
  icon: React.ElementType;
  desc: string;
  title: string;
  color: string;
};

export default function Card({ icon: Icon, desc, title, color }: CardProps) {
  return (
    <CardContent className=" rounded-lg border-[0.5px] p-[2px] bg-input/80"  style={{
      backgroundImage:
         "linear-gradient(white, white), linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
      backgroundOrigin: "border-box",
      backgroundClip: "content-box, border-box",
   }}>
      <section className="flex flex-col gap-4 p-4">
        <div className="rounded-full p-2 w-8 h-8 flex items-center justify-center" style={{ backgroundColor: color }}>
          <Icon className="text-white" />
        </div>
        <p className="text-600-200">{desc}</p>
        <p className="text-main text-lg font-semibold">{title}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded p-5 bg-white/60",
        props.className
      )}
    />
  );
}
