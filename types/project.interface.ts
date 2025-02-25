interface Tools {
  next: boolean;
  react: boolean;
  tailwind: boolean;
  typescript: boolean;
  graphql: boolean;
  apollo: boolean;
  prisma: boolean;
}
export interface ProjectType {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  link?: string;
  tools?: Tools;
  repo?: string;
  dataSource?: string;
  imageSrc?: string;
  images?: string[];
}
