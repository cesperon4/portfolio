import React from "react";
import Image from "next/image";
import { projectInterface } from "@/types/project.interface";

interface ProjectCardArgs {
  projectRef: React.RefObject<HTMLDivElement>;
  openModal: (project: projectInterface) => void;
  project: projectInterface;
}

export function ProjectCard({
  project,
  projectRef,
  openModal,
}: ProjectCardArgs) {
  return (
    <div className="project" ref={projectRef}>
      <div
        className="image-wrapper bg-[#FFEFDB] p-8 shadow rounded"
        onClick={() => {
          openModal(project);
        }}
      >
        <Image src="/images/srportal.png" alt="SR Portal" />
      </div>
      <div className="text-content">
        <h2>
          An interactive tool that transforms public police data from Santa
          Rosa, CA into easy-to-digest maps, charts, and tables for deeper
          community insight.
        </h2>
        <p className="text-white-50 md:text-xl">
          An app built with Next.js, TailwindCSS, & Graphql for a fast,
          user-friendly experience.
        </p>
      </div>
    </div>
  );
}
