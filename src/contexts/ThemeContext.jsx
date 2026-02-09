"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "dark", setTheme: () => {} });

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fromDoc = document.documentElement.getAttribute("data-theme");
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = fromDoc === "light" || fromDoc === "dark"
      ? fromDoc
      : stored === "light" || stored === "dark"
        ? stored
        : "dark";
    document.documentElement.setAttribute("data-theme", initial);
    setThemeState(initial);
  }, []);

  const setTheme = (next) => {
    setThemeState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.setAttribute("data-theme", next);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
