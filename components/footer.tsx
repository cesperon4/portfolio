"use client";

import * as React from "react";
import Image from "next/image";
import { useDataContext } from "../context/DataContext";

interface FooterProps {
  sidebar: boolean;
}
export function Footer({ sidebar }: FooterProps) {
  const { setMenuTab } = useDataContext();
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/cesperon4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github.png"
          alt="Github icon"
          width={20}
          height={20}
        />
        {sidebar && "Github"}
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/christian-esperon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/linkedin.png"
          alt="Linkedin icon"
          width={20}
          height={20}
        />
        {sidebar && "Linkedin"}
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          setMenuTab("Contact");
        }}
      >
        <Image
          aria-hidden
          src="/contact.png"
          alt="Contact icon"
          width={20}
          height={20}
        />
        {sidebar && "Contact"}
      </a>
    </footer>
  );
}
