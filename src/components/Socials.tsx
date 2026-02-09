import React from "react";
import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";

const links = [
  {
    href: "https://www.linkedin.com/in/christian-esperon",
    label: "LinkedIn",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    href: "https://github.com/cesperon4",
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    href: "/resume.pdf",
    label: "Resume",
    icon: FaFileDownload,
    download: "Christian_Esperon_Resume.pdf",
  },
];

const Socials = () => {
  return (
    <div className="social-links flex items-center gap-3 md:gap-4">
      {links.map(({ href, label, icon: Icon, external, download }) => (
        <a
          key={label}
          href={href}
          className="social-link group flex items-center gap-2 rounded-lg px-3 py-2 text-white-50 transition-colors hover:bg-white/5 hover:text-white"
          aria-label={label}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          {...(download && { download })}
        >
          <Icon className="size-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden />
          <span className="text-sm font-medium">{label}</span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
