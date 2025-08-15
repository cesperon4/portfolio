import { useState } from "react";

export function useEnlargeImage() {
  const [image, setImage] = useState({ src: "", alt: "" });
  const [isEnlarged, setIsEnlarged] = useState(false);

  const openEnlargeImage = (src: string, alt: string) => {
    setImage({ src, alt });
    setIsEnlarged(true);
  };

  const closeEnlargeImage = () => setIsEnlarged(false);

  return {
    ...image, // gives src and alt directly
    isEnlarged,
    openEnlargeImage,
    closeEnlargeImage,
  };
}
