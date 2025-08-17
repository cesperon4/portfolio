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
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
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
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
    name: "logo1",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
    name: "logo2",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
    name: "logo3",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
    name: "logo4",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
    name: "logo5",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
    name: "logo6",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
    name: "logo7",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
    name: "logo8",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
    name: "logo9",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
    name: "logo10",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
    name: "logo11",
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
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Project Manager",
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

export {
  words,
  counterItems,
  navLinks,
  logoIconsList,
  techStackImgs,
  abilities,
  dropIn,
  project1,
  project2,
  project3,
  zoomIn,
  expCards,
  techStackIcons,
};
