import React from "react";
import Image from "next/image";
import { ImageModal } from "../image-modal";
import { Backdrop } from "../backdrop";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/animations";
import { ProjectType } from "../../types/project.interface";

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
        {/* {project.imageSrc && (
          <Image
            aria-hidden
            src={project.imageSrc}
            alt="File icon"
            width={1000}
            height={800}
            className="mx-auto"
          />
        )} */}
        {enlargeImage && (
          <ImageModal imageSrc={imageSource} handleClose={handleEnlargeImage} />
        )}
        <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded">
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
        <h2 className="text-secondaryColor">{`name`}</h2>

        <p>{project.name}</p>
        <h2 className="text-secondaryColor">{`description`}</h2>

        <p>{project.description}</p>

        <h2 className="text-secondaryColor">{`start date`}</h2>
        <p>{project.startDate}</p>

        <h2 className="text-secondaryColor">{`end date`}</h2>
        <p>{project.endDate}</p>

        {project.tools && (
          <h2 className="text-secondaryColor">{`languages & frameworks`}</h2>
        )}

        <div className="flex gap-2">
          {project.tools?.next && (
            <Image
              aria-hidden
              src="/next.svg"
              alt="File icon"
              width={60}
              height={60}
            />
          )}
          {project.tools?.react && (
            <Image
              aria-hidden
              src="/React-icon.svg"
              alt="File icon"
              width={60}
              height={60}
            />
          )}
          {project.tools?.tailwind && (
            <Image
              aria-hidden
              src="/tailwind-css.svg"
              alt="File icon"
              width={60}
              height={60}
            />
          )}
          {project.tools?.typescript && (
            <Image
              aria-hidden
              src="/Typescript_logo_2020.svg"
              alt="File icon"
              width={60}
              height={60}
            />
          )}
        </div>
        {project.link && (
          <h2 className="text-secondaryColor">{`project link`}</h2>
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
          <h2 className="text-secondaryColor">{`project repository`}</h2>
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
          <h2 className="text-secondaryColor">{`data source`}</h2>
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
