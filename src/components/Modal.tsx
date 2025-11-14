import React from "react";
import { Backdrop } from "@/components/Backdrop";
import { AnimatePresence, motion } from "framer-motion";
import { dropIn } from "@/constants/index";
import Image from "next/image";
import { projectInterface } from "@/types/project.interface";
import EnlargeImage from "./EnlargeImage";
import { useEnlargeImage } from "@/hooks/useEnlargeImage";
import { X } from "lucide-react";

interface ModalProps {
  closeModal: (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
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
          className="bg-white rounded-xl shadow-2xl md:w-4/12 md:h-10/12 h-8/12 w-screen flex flex-col m-4 overflow-hidden"
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

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0 bg-gray-50">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
              {project.name}
            </h2>
            <button
              onClick={(e) => closeModal(e)}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content - Scrollable */}
          <div className="overflow-y-auto flex-1 px-6 py-6">
            <div className="flex flex-col gap-8">
              {/* Gallery Section */}
              <div>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Project Gallery
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-50 p-4 rounded-lg gap-4 border border-gray-200">
                  {project.images.map((image) => (
                    <motion.div
                      onClick={() => {
                        openEnlargeImage(image.src, image.alt);
                      }}
                      whileHover={{ scale: 1.1 }}
                      key={image.src}
                      className="cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Description Section */}
              <div>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Description
                </p>
                <p className="text-gray-700 leading-relaxed md:text-lg">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-between">
                {/* Technologies Section */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Languages & Frameworks
                  </p>
                  <div className="flex gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-gray-700 md:text-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features Section */}
                {project.features && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                      Languages & Frameworks
                    </p>
                    <div className="flex gap-2">
                      {project.features.map((tech, index) => (
                        <span key={index} className="text-gray-700 md:text-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Project Link Section */}
              <div>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Project Link
                </p>
                <a
                  className="text-blue-600 hover:text-blue-700 underline cursor-pointer break-all"
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.projectLink}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

export default Modal;
