// import Image from "next/image";
"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { Navbar } from "../components/Navbar";
import Hero from "../sections/Hero";
import ShowcaseSection from "@/sections/ShowcaseSection";
import LogoSection from "@/sections/LogoSection";
import FeatureCards from "@/sections/FeatureCards";
import ExperienceSection from "@/sections/ExperienceSection";
import Testimonials from "@/sections/Testimonials";
import TechStack from "@/sections/TechStack";
import Contact from "@/sections/Contact";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468565" emissive="#468565" />
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} />
    </mesh>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
      {/* <Testimonials /> */}
    </>
  );
}
