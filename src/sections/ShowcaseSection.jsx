import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import { projects } from "@/constants";
import TitleHeader from "@/components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

/* Brand colors for tech pills (logo-inspired) */
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

const getTechStyle = (tech) => {
  const colors = TECH_COLORS[tech];
  if (colors) {
    return {
      borderColor: `${colors.bg}88`,
    };
  }
  return {};
};

/** First tech's color for card accent (left bar, hover tint). */
const getCardAccent = (project) => {
  const first = project.technologies[0];
  const colors = first && TECH_COLORS[first];
  return colors ? colors.bg : null;
};

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const { isOpen, openModal, closeModal, project } = useModal();

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll(".work-project-card");
    if (cards?.length) {
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.12 * index,
            scrollTrigger: { trigger: card, start: "top bottom-=80" },
          }
        );
      });
    }
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }
      );
    }
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      {isOpen && project && (
        <Modal closeModal={closeModal} project={project} />
      )}
      <div className="w-full max-w-6xl mx-auto">
        <TitleHeader
          title="Selected work"
          sub="Projects and case studies"
        />
        <div
          ref={gridRef}
          className="work-grid mt-12 md:mt-16"
        >
          {projects.map((proj) => {
            const accentColor = getCardAccent(proj);
            return (
            <button
              key={proj.name}
              type="button"
              className="work-project-card card-border rounded-xl overflow-hidden text-left w-full group transition-all duration-200 hover:border-white/20 relative"
              style={
                accentColor
                  ? { borderLeftWidth: "3px", borderLeftColor: `${accentColor}66` }
                  : undefined
              }
              onClick={() => openModal(proj)}
            >
              <div className="work-project-card-image aspect-[16/10] relative overflow-hidden bg-black-200">
                <img
                  src={proj.images[0]?.src}
                  alt={proj.images[0]?.alt ?? proj.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {accentColor && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: accentColor }}
                    aria-hidden
                  />
                )}
              </div>
              <div className="p-5 md:p-6 relative">
                {accentColor && (
                  <span
                    className="absolute top-5 right-5 md:top-6 md:right-6 w-1.5 h-1.5 rounded-full opacity-70"
                    style={{ backgroundColor: accentColor }}
                    aria-hidden
                  />
                )}
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 line-clamp-2 pr-4">
                  {proj.name}
                </h2>
                <p className="text-white-50 text-sm md:text-base line-clamp-2 mb-4">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/10 text-white-50 text-xs font-medium border"
                      style={getTechStyle(tech)}
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-2.5 py-1 text-white-50/70 text-xs">
                      +{proj.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
