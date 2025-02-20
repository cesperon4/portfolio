import React from "react";
import Image from "next/image";

import { Backdrop } from "./backdrop";
import { motion } from "framer-motion";
import { dropIn } from "@/utils/animations";

interface ImageModalProps {
  imageSrc: string;
  handleClose: (bool: boolean) => void;
}
export function ImageModal({ imageSrc, handleClose }: ImageModalProps) {
  return (
    <Backdrop
      onClick={() => {
        handleClose(false);
      }}
    >
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-[100rem] bg-white p-2 rounded"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {" "}
        <Image
          aria-hidden
          src={imageSrc}
          alt="File icon"
          width={2000}
          height={2000}
          className="w-full"
        />
      </motion.div>
    </Backdrop>
  );
}
