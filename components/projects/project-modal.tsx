import React from "react";
import Image from "next/image";
import { ImageModal } from "../image-modal";
import { Backdrop } from "../backdrop";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/animations";
import { ProjectType } from "../../types/project.interface";
import { Tools } from "./tools";
import { PROJECT_MODAL_CLASSES } from "@/lib/constants";

interface ProjectModalProps {
  handleClose: (bool: boolean) => void;
  project: ProjectType;
}

export function ProjectModal({ handleClose, project }: ProjectModalProps) {
  const [enlargeImage, setEnlargeImage] = React.useState<boolean>(false);
  const [imageSource, setImageSource] = React.useState<string>("");
  const handleEnlargeImage = (bool: boolean, src: string = "") => {
    setImageSource(src);
    setEnlargeImage(bool);
  };
  return (
    <Backdrop
      onClick={() => {
        handleClose(false);
      }}
    >
      <motion.div
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-[80rem] bg-gray-50 p-8 rounded"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {enlargeImage && (
          <ImageModal imageSrc={imageSource} handleClose={handleEnlargeImage} />
        )}
        <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded mb-4">
          {project.images &&
            project.images.map((image) => {
              return (
                <Image
                  key={image}
                  aria-hidden
                  src={image}
                  alt="File icon"
                  width={400}
                  height={400}
                  className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer rounded"
                  onClick={() => {
                    handleEnlargeImage(true, image);
                  }}
                />
              );
            })}
        </div>
        <h2 className={PROJECT_MODAL_CLASSES.h2}>{`name`}</h2>

        <p>{project.name}</p>
        <h2 className={PROJECT_MODAL_CLASSES.h2}>{`description`}</h2>

        <p>{project.description}</p>

        <h2 className={PROJECT_MODAL_CLASSES.h2}>{`start date`}</h2>
        <p>{project.startDate}</p>

        <h2 className={PROJECT_MODAL_CLASSES.h2}>{`end date`}</h2>
        <p>{project.endDate}</p>
        {project.tools && <Tools tools={project.tools} />}

        {project.link && (
          <h2 className={PROJECT_MODAL_CLASSES.h2}>{`project link`}</h2>
        )}
        {project.link && (
          <a
            className="cursor-pointer text-blue-400 hover:text-blue-300"
            href={project.link}
          >
            {project.link}
          </a>
        )}

        {project.repo && (
          <h2 className={PROJECT_MODAL_CLASSES.h2}>{`project repository`}</h2>
        )}
        {project.repo && (
          <a
            className="cursor-pointer text-blue-400 hover:text-blue-300"
            href={project.repo}
          >
            {project.repo}
          </a>
        )}

        {project.dataSource && (
          <h2 className={PROJECT_MODAL_CLASSES.h2}>{`data source`}</h2>
        )}
        {project.dataSource && (
          <a
            className="cursor-pointer text-blue-400 hover:text-blue-300"
            href={project.dataSource}
          >
            {project.dataSource}
          </a>
        )}
      </motion.div>
    </Backdrop>
  );
}
