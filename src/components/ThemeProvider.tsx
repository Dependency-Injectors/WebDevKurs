import React, { createContext, PropsWithChildren, ReactNode, useState } from "react";
import { Theme, ThemeContextTypes } from "../lib/types";
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
} as ThemeContextTypes);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
