import React from "react";
import Image from "next/image";
import { ProjectType } from "../../types/project.interface";
import { PROJECT_MODAL_CLASSES } from "@/lib/constants";

interface ToolsProps {
  tools: ProjectType["tools"];
}
export function Tools({ tools }: ToolsProps) {
  return (
    <>
      <h2 className={PROJECT_MODAL_CLASSES.h2}>{`languages & frameworks`}</h2>
      <div className="flex gap-2">
        {tools?.next && (
          <Image
            aria-hidden
            src="/next.svg"
            alt="File icon"
            width={60}
            height={60}
          />
        )}
        {tools?.react && (
          <Image
            aria-hidden
            src="/React-icon.svg"
            alt="File icon"
            width={60}
            height={60}
          />
        )}
        {tools?.tailwind && (
          <Image
            aria-hidden
            src="/tailwind-css.svg"
            alt="File icon"
            width={60}
            height={60}
          />
        )}
        {tools?.typescript && (
          <Image
            aria-hidden
            src="/Typescript_logo_2020.svg"
            alt="File icon"
            width={60}
            height={60}
          />
        )}
        {tools?.graphql && (
          <Image
            aria-hidden
            src="/graphql.svg"
            alt="File icon"
            width={60}
            height={60}
          />
        )}
        {tools?.graphql && (
          <Image
            aria-hidden
            src="/apollo.svg"
            alt="File icon"
            width={60}
            height={60}
          />
        )}
        {tools?.prisma && (
          <Image
            aria-hidden
            src="/prisma.svg"
            alt="File icon"
            width={60}
            height={60}
          />
        )}
      </div>
    </>
  );
}
