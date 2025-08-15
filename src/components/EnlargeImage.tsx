import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { zoomIn } from "@/constants";
import { Backdrop } from "@/components/Backdrop";
interface EnlargeImageProps {
  image: string;
  alt: string;
  closeEnlargeImage: () => void;
}
const EnlargeImage = ({ image, alt, closeEnlargeImage }: EnlargeImageProps) => {
  return (
    <Backdrop onClick={closeEnlargeImage}>
      <motion.div
        className=""
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Image
          className="rounded-lg"
          src={image}
          alt={alt}
          width={2000}
          height={2000}
        />
      </motion.div>
    </Backdrop>
  );
};

export default EnlargeImage;
