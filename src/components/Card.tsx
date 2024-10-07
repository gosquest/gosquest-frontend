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
    <CardContent className="bg-[#FFFFFF] rounded-lg shadow">
      <section className="flex flex-col gap-4">
        <div className="rounded-full p-2 w-8 h-8 flex items-center justify-center" style={{ backgroundColor: color }}>
          <Icon className="text-white" />
        </div>
        <p>{desc}</p>
        <h4 className="text-main">{title}</h4>
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
