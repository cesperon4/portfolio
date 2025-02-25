import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/animations";
import { Project } from "./project";
import { PROJECTS } from "../../lib/constants";
import { ProjectModal } from "./project-modal";
import { ProjectType } from "../../types/project.interface";
export function ProjectsContainer() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const fetchProject = (id: number) => {
    setSelectedProject(PROJECTS.filter((project) => project.id === id)[0]);
  };
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false);

  const handleProjectModal = (bool: boolean, id?: number) => {
    if (id) fetchProject(id);
    setOpenProjectModal(bool);
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[100rem] text-black overflow-hidden p-4"
      variants={slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {openProjectModal && selectedProject && (
        <ProjectModal
          handleClose={handleProjectModal}
          project={selectedProject}
        />
      )}
      {PROJECTS.map((project) => (
        <Project
          key={project.id}
          project={project}
          handleProjectModal={handleProjectModal}
        />
      ))}
    </motion.div>
  );
}
