import React, { useState } from "react";
import { Backdrop } from "@/components/Backdrop";
import { AnimatePresence, motion } from "framer-motion";
import { dropIn } from "@/constants/index";
import Image from "next/image";
import { projectInterface } from "@/types/project.interface";
import EnlargeImage from "./EnlargeImage";
import { useEnlargeImage } from "@/hooks/useEnlargeImage";
import { X, ExternalLink, Github, Database } from "lucide-react";

interface ModalProps {
  closeModal: (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  project: projectInterface;
}

/* Brand colors for tech pills (matching ShowcaseSection) */
const TECH_COLORS = {
  "Next.js": { bg: "#000000", text: "#fff" },
  React: { bg: "#61dafb", text: "#000" },
  Tailwind: { bg: "#06b6d4", text: "#000" },
  TailwindCSS: { bg: "#06b6d4", text: "#000" },
  Typescript: { bg: "#3178c6", text: "#fff" },
  TypeScript: { bg: "#3178c6", text: "#fff" },
  Graphql: { bg: "#e10098", text: "#fff" },
  GraphQL: { bg: "#e10098", text: "#fff" },
  Apollo: { bg: "#311c87", text: "#fff" },
  Prisma: { bg: "#2d3748", text: "#fff" },
  "Hugging Face": { bg: "#ffd21e", text: "#000" },
  OLLAMA: { bg: "#3d8c40", text: "#fff" },
  "Notion SDK": { bg: "#000", text: "#fff" },
};

const getTechStyle = (tech: string) => {
  const colors = TECH_COLORS[tech as keyof typeof TECH_COLORS];
  if (colors) {
    return {
      borderColor: `${colors.bg}88`,
    };
  }
  return {};
};

/* Gallery Image Component with Loading State */
const GalleryImage = ({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 bg-black-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </div>
      )}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black-200">
          <div className="text-white-50 text-sm">Failed to load</div>
        </div>
      ) : (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          } transition-transform duration-300 group-hover:scale-110`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
    </>
  );
};

const Modal = ({ closeModal, project }: ModalProps) => {
  const { src, alt, isEnlarged, openEnlargeImage, closeEnlargeImage } =
    useEnlargeImage();

  const firstTech = project.technologies[0];
  const accentColor =
    firstTech && TECH_COLORS[firstTech as keyof typeof TECH_COLORS]
      ? TECH_COLORS[firstTech as keyof typeof TECH_COLORS].bg
      : null;

  return (
    <AnimatePresence>
      <Backdrop onClick={closeModal}>
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="project-modal bg-black-50 border border-white/10 rounded-2xl shadow-2xl md:max-w-5xl md:w-[90vw] w-[95vw] max-h-[90vh] flex flex-col m-4 overflow-hidden backdrop-blur-xl"
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

          {/* Hero Image Section */}
          <div className="project-modal-hero relative h-64 md:h-80 overflow-hidden">
            {accentColor && (
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}15 0%, transparent 100%)`,
                }}
                aria-hidden
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black-50" />
            {project.images[0] && (
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                  {project.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  {project.projectLink && (
                    <motion.a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="project-modal-link-btn project-modal-link-btn-primary inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border-2 rounded-lg text-sm font-medium transition-all duration-200 bg-transparent"
                      style={{
                        borderColor: accentColor || '#06b6d4',
                        color: accentColor || '#06b6d4',
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Project
                    </motion.a>
                  )}
                  {project.repo && (
                    <motion.a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="project-modal-link-btn project-modal-link-btn-github inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border-2 rounded-lg text-sm font-medium transition-all duration-200 bg-transparent"
                      style={{
                        borderColor: '#8b5cf6',
                        color: '#8b5cf6',
                      }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                  )}
                  {project.dataSource && (
                    <motion.a
                      href={project.dataSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="project-modal-link-btn project-modal-link-btn-datasource inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border-2 rounded-lg text-sm font-medium transition-all duration-200 bg-transparent"
                      style={{
                        borderColor: '#0ea5e9',
                        color: '#0ea5e9',
                      }}
                    >
                      <Database className="w-4 h-4" />
                      Data Source
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={(e) => closeModal(e)}
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/10 text-white transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content - Scrollable */}
          <div className="overflow-y-auto flex-1 project-modal-content">
            <div className="p-6 md:p-8 space-y-8">
              {/* Description Section */}
              <div>
                <h3 className="text-xs font-semibold text-white-50 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span
                    className="w-1 h-4 rounded-full"
                    style={{
                      backgroundColor: accentColor || "#06b6d4",
                    }}
                  />
                  Overview
                </h3>
                <p className="text-white-50 leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>
              </div>

              {/* Technologies Section */}
              <div>
                <h3 className="text-xs font-semibold text-white-50 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span
                    className="w-1 h-4 rounded-full"
                    style={{
                      backgroundColor: accentColor || "#06b6d4",
                    }}
                  />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => {
                    const techStyle = getTechStyle(tech);
                    return (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/10 text-white-50 text-sm font-medium border backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
                        style={techStyle}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Features Section */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-white-50 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span
                      className="w-1 h-4 rounded-full"
                      style={{
                        backgroundColor: accentColor || "#06b6d4",
                      }}
                    />
                    Key Features
                  </h3>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-white-50"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            backgroundColor: accentColor || "#06b6d4",
                          }}
                        />
                        <span className="text-base md:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery Section */}
              {project.images.length > 1 && (
                <div>
                  <h3 className="text-xs font-semibold text-white-50 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span
                      className="w-1 h-4 rounded-full"
                      style={{
                        backgroundColor: accentColor || "#06b6d4",
                      }}
                    />
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {project.images.slice(1).map((image) => (
                      <motion.div
                        onClick={() => {
                          openEnlargeImage(image.src, image.alt);
                        }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        key={image.src}
                        className="project-modal-gallery-item relative aspect-video rounded-lg overflow-hidden cursor-pointer border border-white/10 bg-black-200 group"
                      >
                        <GalleryImage
                          imageSrc={image.src}
                          imageAlt={image.alt}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
                            Click to enlarge
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

export default Modal;
