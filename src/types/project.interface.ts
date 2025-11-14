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
  projectLink: string;
  repo?: string;
  dataSource?: string;
  images: projectImage[];
  features?: string[];
}
