"use client";

import Image from "next/image";
import { ContactForm } from "../components/contact/contact-form";
import { HomeContainer } from "../components/home/home-container";
import { ProjectsContainer } from "@/components/projects/projects-container";
import { AboutContainer } from "../components/about/about-container";
import { useDataContext } from "../context/DataContext";
import { AnimatePresence } from "framer-motion";
import { Footer } from "../components/footer";

export default function Home() {
  const { menuTab } = useDataContext();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] w-full items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans overflow-x-hidden">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/astro.png"
          alt="Vercel logomark"
          width={100}
          height={100}
        />

        <AnimatePresence mode="wait" initial={false}>
          {menuTab === "Contact" && <ContactForm />}
          {menuTab === "Home" && <HomeContainer />}
          {menuTab === "Projects" && <ProjectsContainer />}
          {menuTab === "About" && <AboutContainer />}
        </AnimatePresence>
      </main>
      <Footer sidebar={true} />
    </div>
  );
}
