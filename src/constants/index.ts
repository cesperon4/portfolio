const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "", label: "Years of Experience" },
  { value: 40, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/react.png",
    name: "logo1",
  },
  {
    imgPath: "/images/logos/tailwind.png",
    name: "logo11",
  },
  {
    imgPath: "/images/logos/ts.png",
    name: "logo2",
  },
  {
    imgPath: "/images/logos/js.png",
    name: "logo3",
  },
  {
    imgPath: "/images/logos/node.png",
    name: "logo5",
  },
  {
    imgPath: "/images/logos/graphql.png",
    name: "logo6",
  },
  {
    imgPath: "/images/logos/postgres.svg",
    name: "logo7",
  },
  {
    imgPath: "/images/logos/next.svg",
    name: "logo8",
  },
  {
    imgPath: "/images/logos/git.png",
    name: "logo10",
  },
  {
    imgPath: "/images/logos/azure.png",
    name: "logo9",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
    name: "logo4",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const dropIn = {
  hidden: { y: "-50vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring" as const,
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    y: "25vh",
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

const slideIn = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut" as const,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" as const },
  },
};

const zoomIn = {
  hidden: { scale: 0.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring" as const,
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const project1 = {
  name: "SR Portal",
  description:
    "This project utilizes publicly available ArcGIS data from Santa Rosa, CA, with the primary objective of offering comprehensive insights into crime trends across the city.",
  technologies: ["Next.js", "React", "Tailwind", "Typescript", "Graphql"],
  projectLink: "https://sr-portal-gamma.vercel.app/",
  repo: "https://github.com/cesperon4/sr_portal",
  dataSource: "https://data-santarosa.opendata.arcgis.com/",
  images: [
    { src: "/images/srportal.png", alt: "srportal", width: 500, height: 400 },
    // { src: "/images/srportal.png", alt: "srportal", width: 500, height: 400 },
    // { src: "/images/srportal.png", alt: "srportal", width: 500, height: 400 },
    // { src: "/images/srportal.png", alt: "srportal", width: 500, height: 400 },
    // { src: "/images/srportal.png", alt: "srportal", width: 500, height: 400 },
  ],
};

const project2 = {
  name: "BAWSCA Portal",
  description:
    "This project was created for The Bay Area Water Supply & Conservation Agency (BAWSCA) which is a small agency representing 26 water agencies across the Bay Area that purchase wholesale water from San Francisco. To support its efforts, the Water Conservation Database serves as a centralized data management hub, storing key information such as projected water supplies, sector-based water consumption, population data, and conservation measures. Primarily used to collect data for BAWSCA’s annual report, the database also supports long-term water demand forecasting and other analytical efforts. While BAWSCA and its consultants regularly utilize the tool, individual agency staff typically log in once per year to submit required data.",
  technologies: ["Next.js", "React", "Tailwind", "Graphql", "Apollo", "Prisma"],
  projectLink: "https://bawscaportal.azurewebsites.net/",
  images: [
    { src: "/images/bawsca1.png", alt: "bawsca1", width: 500, height: 400 },
    { src: "/images/bawsca2.png", alt: "bawsca2", width: 500, height: 400 },
    { src: "/images/bawsca3.png", alt: "bawsca3", width: 500, height: 400 },
    { src: "/images/bawsca4.png", alt: "bawsca4", width: 500, height: 400 },
    { src: "/images/bawsca5.png", alt: "bawsca5", width: 500, height: 400 },
  ],
};

const project3 = {
  name: "ACWD Portal",
  description:
    "This project was developed for the Alameda County Water District (ACWD) to enable administrators to create fully customizable water savings forms for customers. Supported field types include multi-checkbox options, lookup fields, dropdowns, and more. Additionally, forms feature customizable statuses that can be updated by both customers and administrators to track progress efficiently.",
  technologies: ["Next.js", "React", "Tailwind", "Graphql", "Apollo", "Prisma"],
  projectLink: "https://acwdportal.azurewebsites.net/",
  images: [
    { src: "/images/acwd1.png", alt: "acwd1", width: 500, height: 400 },
    { src: "/images/acwd2.png", alt: "acwd2", width: 500, height: 400 },
    { src: "/images/acwd3.png", alt: "acwd3", width: 500, height: 400 },
    { src: "/images/acwd4.png", alt: "acwd4", width: 500, height: 400 },
    { src: "/images/acwd5.png", alt: "acwd5", width: 500, height: 400 },
  ],
};

const expCards = [
  {
    review:
      "Christian played a pivotal role in developing Pathloom's interactive mapping features, quickly mastering our Vue.js and Node.js codebase to significantly enhance the platform’s functionality and user experience.",
    imgPath: "/images/pathloom2.png",
    logoPath: "/images/pathloom3.png",
    title: "Full Stack Software Engineer",
    date: "January 2023 - Present",
    responsibilities: [
      `Developed an interactive map using spatial data (polygons, linestrings,
        points) to enhance user experience`,
      `Analyzed and manipulated large datasets (80,000+ rows) for accurate
        data visualization.`,
      `Integrated Mapbox API and tilesets to display overlays such as water
        bodies and roads`,
      `Built front-end components using Vue.js and Quasar, ensuring
        seamless UI interactions`,
      `Expanded and maintained Node.js API, implementing new features
        and optimizations`,
      `Managed a PostgreSQL database hosted on an AWS EC2 instance`,
    ],
  },
  {
    review:
      "Christian was instrumental in driving our engineering team’s adoption of modern web technologies, leveraging his expertise in React and Node.js to streamline development and elevate product quality.",
    imgPath: "/images/wc5.png",
    logoPath: "/images/wc3.png",
    title: "Web Developer II",
    date: "February 2022 - February 2025",
    responsibilities: [
      `Led the development of multiple contracted data management
        systems for clients in California, including BAWCA (Bay Area Water
        Supply & Conservation Agency), ACWD (Alameda County Water
        District), and EMWD (Eastern Municipal Water District). Designed
        and implemented scalable solutions to streamline data processing,
        improve operational efficiency and enhance reporting capabilities.`,
      `Developed responsive user interfaces using modern frameworks
        and tools, including React, Tailwind CSS, and Redux, ensuring
        seamless user experiences and maintainable code.`,
      `Developed secure and high-performance APIs using GraphQL,
        Apollo Server, Express.js, Postgres, and Prisma ensuring robust
        data handling and seamless client -server communication`,
      `Utilized AWS DevOps and Git to deploy and maintain the codebase
          through a robust CI/CD pipeline, ensuring seamless integration and
          delivery.`,
    ],
  },
  // {
  //   review:
  //     "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Typescript",
    modelPath: "/models/ts.glb",
    scale: 1.8,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
  },
  {
    name: "Tailwind",
    modelPath: "/models/tailwind.glb",
    scale: 2,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0] as [number, number, number],
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const projectDetails = [
  {
    name: "SR Portal",
    description:
      "This project utilizes publicly available ArcGIS data from Santa Rosa, CA, with the primary objective of offering comprehensive insights into crime trends across the city.",
    technologies: ["Next.js", "React", "Tailwind", "Typescript", "Graphql"],
    projectLink: "https://sr-portal-gamma.vercel.app/",
    repo: "https://github.com/cesperon4/sr_portal",
    dataSource: "https://data-santarosa.opendata.arcgis.com/",
    images: [
      { src: "/images/srportal.png", alt: "srportal", width: 500, height: 400 },
      // { src: "/images/srportal.png", alt: "srportal", width: 500, height: 400 },
      // { src: "/images/srportal.png", alt: "srportal", width: 500, height: 400 },
      // { src: "/images/srportal.png", alt: "srportal", width: 500, height: 400 },
      // { src: "/images/srportal.png", alt: "srportal", width: 500, height: 400 },
    ],
  },
  {
    name: "Bawsca Portal",
    description:
      "This project was created for The Bay Area Water Supply & Conservation Agency (BAWSCA) which is a small agency representing 26 water agencies across the Bay Area that purchase wholesale water from San Francisco. To support its efforts, the Water Conservation Database serves as a centralized data management hub, storing key information such as projected water supplies, sector-based water consumption, population data, and conservation measures. Primarily used to collect data for BAWSCA’s annual report, the database also supports long-term water demand forecasting and other analytical efforts. While BAWSCA and its consultants regularly utilize the tool, individual agency staff typically log in once per year to submit required data.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "Graphql",
      "Apollo",
      "Prisma",
    ],
    projectLink: "https://bawscaportal.azurewebsites.net/",
    images: [
      { src: "/images/bawsca1.png", alt: "bawsca1", width: 500, height: 400 },
      { src: "/images/bawsca2.png", alt: "bawsca2", width: 500, height: 400 },
      { src: "/images/bawsca3.png", alt: "bawsca3", width: 500, height: 400 },
      { src: "/images/bawsca4.png", alt: "bawsca4", width: 500, height: 400 },
      { src: "/images/bawsca5.png", alt: "bawsca5", width: 500, height: 400 },
    ],
  },
  {
    name: "Acwd Portal",
    description:
      "This project was developed for the Alameda County Water District (ACWD) to enable administrators to create fully customizable water savings forms for customers. Supported field types include multi-checkbox options, lookup fields, dropdowns, and more. Additionally, forms feature customizable statuses that can be updated by both customers and administrators to track progress efficiently.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "Graphql",
      "Apollo",
      "Prisma",
    ],
    projectLink: "https://acwdportal.azurewebsites.net/",
    images: [
      { src: "/images/acwd1.png", alt: "acwd1", width: 500, height: 400 },
      { src: "/images/acwd2.png", alt: "acwd2", width: 500, height: 400 },
      { src: "/images/acwd3.png", alt: "acwd3", width: 500, height: 400 },
      { src: "/images/acwd4.png", alt: "acwd4", width: 500, height: 400 },
      { src: "/images/acwd5.png", alt: "acwd5", width: 500, height: 400 },
    ],
  },
];

export {
  words,
  counterItems,
  navLinks,
  logoIconsList,
  techStackImgs,
  abilities,
  dropIn,
  slideIn,
  project1,
  project2,
  project3,
  zoomIn,
  expCards,
  techStackIcons,
  projectDetails,
};
