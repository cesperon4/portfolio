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
          className="modal-wrapper bg-white rounded-lg md:w-8/12 md:h-10/12 w-screen h-8/12 text-black p-8 overflow-auto relative"
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
          <h2 className="title">{project.name}</h2>
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

          <div className="text-content">
            <h2>text title</h2>
            <p>text content</p>
          </div>

          <div className="tech-stack flex gap-2">
            <span>react</span>
            <span>react</span>
            <span>react</span>
            <span>react</span>
          </div>

          <p className="project-link">project link</p>
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

export default Modal;
