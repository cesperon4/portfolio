import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/animations";
import { ResumeDownload } from "./resume-download";
import Image from "next/image";

export function AboutContainer() {
  return (
    <div className="flex gap-12 text-black overflow-hidden w-[100rem] justify-center">
      <div className="flex flex-col gap-8 rounded-lg shadow p-8 bg-secondaryColor text-gray-50">
        <p>
          Hello my name is Christian Esperon and I am a software engineer. I
          currently live in Santa Rosa Ca, where I graduated with a computer
          science degree from Sonoma State University in 2019. After graudating
          I began my career working for an early start up *Pathloom*.
        </p>
        <ResumeDownload />
      </div>
      <motion.div
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Image
          className="dark:invert rounded-lg"
          src="/about.jpeg"
          alt="Vercel logomark"
          width={500}
          height={500}
        />
      </motion.div>
    </div>
  );
}
