"use client"
import { CardContent } from "@/components/Card";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation"; 
import fishot from "../../../../public/uploads/fishot.png";
import MobileNav from "@/components/MobileNav";

const projects = [
  { name: "nova", image: fishot },
  { name: "fishot", image: fishot },
  { name: "orion", image: fishot },
  { name: "altair", image: fishot },
  { name: "vega", image: fishot },
  { name: "sirius", image: fishot },
  { name: "proxima", image: fishot },
  { name: "rigel", image: fishot },
  { name: "aldebaran", image: fishot },
];

const ProjectsPage = () => {
  const router = useRouter();

  const handleNavigation = (projectName: string) => {
    router.push(`/dashboard/projects/${projectName}`);
  };

  return (
    <div>
      <MobileNav />
      <h2 className="mt-20 sm:mt-[180px] md:mt-40">Projects</h2>
      <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-14">
        {projects.map((project) => (
          <CardContent
            key={project.name}
            className="flex items-center justify-center bg-white md:h-40 cursor-pointer"
            onClick={() => handleNavigation(project.name)} // Add navigation handler
          >
            <Image src={project.image} alt={project.name} />
          </CardContent>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
