/** @format */

import React from "react";
import { cn } from "@/lib/utils";

export type CardProps = {
  icon: React.ElementType;
  desc: string;
  title: string;
};

export default function Card({ icon: Icon, desc, title }: CardProps) {
  return (
    <CardContent className="shadow border">
      <section className="flex flex-col gap-4">
        <div className="rounded-full p-3 bg-gray-100 w-10 h-10 flex items-center justify-center">
          <Icon className="text-2xl text-black" />
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
