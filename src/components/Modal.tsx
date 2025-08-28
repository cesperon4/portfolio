import React from "react";
import { Backdrop } from "@/components/Backdrop";
import { AnimatePresence, motion } from "framer-motion";
import { dropIn } from "@/constants/index";
import Image from "next/image";
import { projectInterface } from "@/types/project.interface";
import EnlargeImage from "./EnlargeImage";
import { useEnlargeImage } from "@/hooks/useEnlargeImage";

interface ModalProps {
  closeModal: (event: React.MouseEvent<HTMLDivElement>) => void;
  project: projectInterface;
}
const Modal = ({ closeModal, project }: ModalProps) => {
  const { src, alt, isEnlarged, openEnlargeImage, closeEnlargeImage } =
    useEnlargeImage();

  return (
    <AnimatePresence>
      <Backdrop onClick={closeModal}>
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="modal-wrapper flex flex-col gap-8 bg-white rounded-lg md:w-4/12 md:h-10/12 h-8/12 w-screen text-black p-8 overflow-auto relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {isEnlarged && (
            <EnlargeImage
              image={src}
              alt={alt}
              closeEnlargeImage={closeEnlargeImage}
            />
          )}
          <div
            className="absolute top-0 right-0 cursor-pointer mr-2"
            onClick={(e) => {
              closeModal(e);
            }}
          >
            x
          </div>

          <h2 className="title md:text-2xl lg:text-3xl font-semibold">
            {project.name}
          </h2>
          <div>
            <p className="project-modal-heading">Project Gallery</p>

            <div className="gallery-wrapper grid grid-cols-1 md:grid-cols-4 bg-gray-50 p-4 rounded-lg gap-4">
              {project.images.map((image) => (
                <motion.div
                  onClick={() => {
                    openEnlargeImage(image.src, image.alt);
                  }}
                  whileHover={{ scale: 1.1 }}
                  key={image.src}
                  className="image-wrapper cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-content">
            <p className="project-modal-heading">Description</p>
            <p className="md:text-xl">{project.description}</p>
          </div>

          <div className="tech-stack flex flex-col gap-2 md:text-xl">
            <p className="project-modal-heading">{"Languages & Frameworks"}</p>

            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>

          <div className="project-link-wrapper">
            <p className="project-modal-heading">{"Project Link"}</p>
            <a
              className="project-link cursor-pointer text-blue-500"
              href={project.projectLink}
            >
              {project.projectLink}
            </a>
          </div>
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

export default Modal;
