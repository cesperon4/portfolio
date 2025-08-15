import { useState } from "react";
import { projectInterface } from "@/types/project.interface";
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [project, setProject] = useState<projectInterface | null>(null);
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const openModal = (project: projectInterface) => {
    setProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleModal, openModal, closeModal, project };
}
