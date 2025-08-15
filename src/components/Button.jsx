import React from "react";

const Button = ({ text, className, id }) => {
  return (
    <a
      className={`${className ?? ""} cta-wrapper`}
      // href="#work"
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("counter");

        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
    >
      <div className="cta-button group">
        <div className="bg-circle bg-blue-400" />
        <p className="text text-white font-semibold">{text}</p>
        <div className="arrow-wrapper bg-blue-400">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
