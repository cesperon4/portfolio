import React from "react";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";

export function ResumeDownload() {
  return (
    <a href="/resume.pdf" download="My_Resume.pdf">
      <Button
        variant="outline"
        size="icon"
        className="bg-primaryColor w-fit p-4 flex items-center mx-auto"
      >
        <FaDownload />
        Download Resume
      </Button>
    </a>
  );
}
