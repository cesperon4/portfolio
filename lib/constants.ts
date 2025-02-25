export const SIDEBAR_CLASSES = {
  icon: "text-primaryColor mr-2 text-lg",
  header: "font-sans font-semibold text-xl",
};

export const PROJECT_MODAL_CLASSES = {
  h2: "text-secondaryColor font-bold",
};

export const PROJECTS = [
  {
    id: 1,
    name: "sr-portal",
    startDate: "02-19-24",
    endDate: "ongoing",
    description:
      "This project was created using public arcgis data from Santa Rosa Ca.",
    tools: {
      next: true,
      react: true,
      tailwind: true,
      typescript: true,
      graphql: false,
      apollo: false,
      prisma: false,
    },
    link: "https://sr-portal-gamma.vercel.app/",
    repo: "https://github.com/cesperon4/sr_portal",
    dataSource: "https://data-santarosa.opendata.arcgis.com/",
    imageSrc: "/srportal.png",
    images: ["/srportal.png"],
  },
  {
    id: 2,
    name: "portfolio site",
    startDate: "02-19-24",
    endDate: "ongoing",
    description:
      "This project was created using public arcgis data from Santa Rosa Ca.",
    tools: {
      next: true,
      react: true,
      tailwind: true,
      typescript: true,
      graphql: false,
      apollo: false,
      prisma: false,
    },
    link: "https://portfolio-topaz-chi-49.vercel.app/",
    repo: "https://github.com/cesperon4/sr_portal",
    dataSource: "https://data-santarosa.opendata.arcgis.com/",
    imageSrc: "/portfolio.png",
    images: ["/portfolio.png"],
  },
  {
    id: 3,
    name: "bawsca portal",
    startDate: "04-24-23",
    endDate: "9-12-23",
    description:
      "This project was created using public arcgis data from Santa Rosa Ca.",
    tools: {
      next: true,
      react: true,
      tailwind: true,
      typescript: false,
      graphql: true,
      apollo: true,
      prisma: true,
    },
    link: "https://bawscaportal.azurewebsites.net/",
    imageSrc: "/bawsca1.png",
    images: [
      "/bawsca1.png",
      "/bawsca2.png",
      "/bawsca3.png",
      "/bawsca4.png",
      "/bawsca5.png",
    ],
  },
  {
    id: 4,
    name: "acwd portal",
    startDate: "01-19-24",
    endDate: "02-03-25",
    description:
      "This project was created using public arcgis data from Santa Rosa Ca.",
    link: "https://acwdportal.azurewebsites.net/",
    tools: {
      next: true,
      react: true,
      tailwind: true,
      typescript: false,
      graphql: true,
      apollo: true,
      prisma: true,
    },
    imageSrc: "/acwd1.png",
    images: [
      "/acwd1.png",
      "/acwd2.png",
      "/acwd3.png",
      "/acwd4.png",
      "/acwd5.png",
      "/acwd6.png",
    ],
  },
  // {
  //   id: 5,
  //   name: "sr-portal",
  //   startDate: "02-19-24",
  //   endDate: "02-19-24",
  //   description:
  //     "This project was created using public arcgis data from Santa Rosa Ca.",
  // },
];
