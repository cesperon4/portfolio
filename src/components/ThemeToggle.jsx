"use client";

import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle flex items-center justify-center w-10 h-10 rounded-lg text-white-50 hover:text-white hover:bg-white/5 transition-colors"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <FaSun className="size-5" aria-hidden />
      ) : (
        <FaMoon className="size-5" aria-hidden />
      )}
    </button>
  );
}
