export const slideIn = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const dropIn = {
  hidden: { y: "-100%", opacity: 0 }, // Start off-screen above
  visible: {
    y: "0", // Drop to its normal position
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "100%", // Exit by falling down
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
