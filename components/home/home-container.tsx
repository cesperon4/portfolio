import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { useDataContext } from "../../context/DataContext";

export function HomeContainer() {
  const { setMenuTab } = useDataContext();
  return (
    <motion.div
      className="flex flex-col gap-4 text-black overflow-hidden"
      variants={slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <span className="text-primaryColor font-semibold">
        Hello World, my name is
      </span>
      <h2 className="text-4xl font-bold text-secondaryColor">
        Christian Esperon
      </h2>
      <h2 className="text-4xl font-bold">I build things for the web.</h2>
      <p className="text-secondaryColor">
        {`I'm a software engineer specializing in building (and occasionally designing)`}
        <br />
        {`exceptional digital experiences. Currently, I'm focused on building`}
        <br />
        {`accessible, human-centered products at `}
        <a className="text-primaryColor font-semibold">Upstream</a>
      </p>
      <Button
        variant="outline"
        className="border border-primaryColor text-secondaryColor font-semibold"
        onClick={() => {
          setMenuTab("Projects");
        }}
      >
        Check out my current project
      </Button>
    </motion.div>
  );
}
