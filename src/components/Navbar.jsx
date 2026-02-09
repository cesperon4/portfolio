"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "../constants/index";
import Socials from "./Socials";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const SCROLL_DOWN_THRESHOLD = 30;
    const SCROLL_UP_THRESHOLD = 10;

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (y > SCROLL_DOWN_THRESHOLD) return true;
        if (y < SCROLL_UP_THRESHOLD) return false;
        return prev;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const navContent = (
    <>
      {navLinks.map(({ link, name }) => (
        <li key={name} className="group">
          <a href={link} onClick={closeMobile}>
            <span>{name}</span>
            <span className="underline" />
          </a>
        </li>
      ))}
    </>
  );

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="navbar-inner">
        <a className="logo" href="#hero" onClick={closeMobile}>
          C | E
        </a>

        <nav className="desktop">
          <ul>{navContent}</ul>
        </nav>

        <div className="navbar-actions">
          {/* <ThemeToggle /> */}
          <Socials />
          <a
            href="#contact"
            className="contact-btn group"
            onClick={closeMobile}
          >
            <span className="contact-btn-text">Contact me</span>
          </a>
        </div>

        <button
          type="button"
          className="navbar-mobile-trigger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={mobileOpen ? "open" : ""} />
          <span className={mobileOpen ? "open" : ""} />
          <span className={mobileOpen ? "open" : ""} />
        </button>
      </div>

      <div
        className={`navbar-mobile ${mobileOpen ? "open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="navbar-mobile-nav">
          <ul>{navContent}</ul>
        </nav>
        <div className="navbar-mobile-actions">
          {/* <ThemeToggle /> */}
          <Socials />
          <a
            href="#contact"
            className="contact-btn group"
            onClick={closeMobile}
          >
            <span className="contact-btn-text">Contact me</span>
          </a>
        </div>
      </div>
    </header>
  );
}
