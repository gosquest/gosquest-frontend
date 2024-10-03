/** @format */

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type CardProps = {
  icon: string;
  desc: string;
  title: string;
};

export default function Card({ icon, desc, title }: CardProps) {
  return (
    <CardContent>
      <section className="flex flex-col gap-4">
        <Image height={24} width={24} src={icon} alt="project" />
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
        "flex w-full flex-col gap-3 rounded p-5  bg-white/60",
        props.className
      )}
    />
  );
}
