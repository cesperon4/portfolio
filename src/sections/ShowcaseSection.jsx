import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import { project1, project2, project3 } from "@/constants";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  //runs only once when component is mounted
  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=100" }, //start when the bottom of the screen is near top of the card
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  const { isOpen, openModal, closeModal, project } = useModal();

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      {isOpen && <Modal closeModal={closeModal} project={project} />}
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div
              className="image-wrapper"
              onClick={() => {
                openModal(project1);
              }}
            >
              <img src="/images/srportal.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                An interactive tool that transforms public police data from
                Santa Rosa, CA into easy-to-digest maps, charts, and tables for
                deeper community insight.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with Next.js, TailwindCSS, & Graphql for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div
                className="image-wrapper bg-[#FFEFDB]"
                onClick={() => {
                  openModal(project2);
                }}
              >
                <img
                  src="/images/bawsca4.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>
                Water Conservation Management System for the Bay Area Water
                Supply & Conservation Agency
              </h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div
                className="image-wrapper bg-[#FFE7EB]"
                onClick={() => {
                  openModal(project3);
                }}
              >
                <img src="/images/acwd1.png" alt="YC Directory App" />
              </div>
              <h2>
                Customizable Water Savings Application Forms for the Alameda
                County Water District.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
