export interface projectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface projectInterface {
  name: string;
  description: string;
  technologies: string[];
  images: projectImage[];
  projectLink: string;
}
