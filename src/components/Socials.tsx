import React from "react";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="social-links md:flex items-center gap-4 mr-auto ml-5 hidden">
      <a href="https://www.linkedin.com/in/christian-esperon" className="link">
        <Image
          className="rounded-lg"
          src={"/images/linkedin.png"}
          alt={"GitHub"}
          width={20}
          height={20}
        />
        Linkedin
        <span className="underline" />
      </a>
      <span>|</span>
      <a href="https://github.com/cesperon4" className="link">
        <Image
          className="rounded-lg"
          src={"/images/github.png"}
          alt={"GitHub"}
          width={20}
          height={20}
        />
        Github
      </a>
      <span>|</span>
      <a href="/resume.pdf" download="My_Resume.pdf">
        <button className="bg-primaryColor flex gap-1 items-center text-white cursor-pointer">
          <FaDownload />
          Resume
        </button>
      </a>
    </div>
  );
};

export default Socials;
