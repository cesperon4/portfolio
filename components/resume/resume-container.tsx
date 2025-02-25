import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/animations";

export function ResumeContainer() {
  return (
    <motion.div
      className="grid grid-cols-2 gap-8 w-[100rem] text-black overflow-hidden p-8"
      variants={slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    ></motion.div>
  );
}
