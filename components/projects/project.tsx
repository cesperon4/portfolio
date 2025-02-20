import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectType } from "../../types/project.interface";
import Image from "next/image";

interface ProjectProps {
  project: ProjectType;
  handleProjectModal: (bool: boolean, id?: number) => void;
}

export function Project({ project, handleProjectModal }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      key={project.name}
      className="cursor-pointer border shadow rounded p-4"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="text-xl font-semibold dark:text-gray-50">
        {project.name}
      </h1>
      {project.imageSrc && (
        <Image
          aria-hidden
          src={project.imageSrc}
          alt="File icon"
          width={1000}
          height={800}
        />
      )}
      <Button
        className="mt-4 bg-primaryColor hover:bg-secondaryColor w-full"
        onClick={() => {
          handleProjectModal(true, project.id);
        }}
      >
        View Project Details
      </Button>
    </motion.div>
  );
}
