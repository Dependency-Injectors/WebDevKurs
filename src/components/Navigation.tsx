import React, { use, useState } from "react";
import { NavLink } from "react-router";
import { routes } from "../routes";
import { Moon, Sun } from "lucide-react";
import { Theme } from "../lib/types";
import { ThemeContext } from "./ThemeProvider";
const getActiveClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-blue-500 font-bold" : "text-gray-700 hover:text-blue-400";

const Navigation = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div className="flex items-center justify-between px-4 py-6 border-b-2 border-b-amber-500">
      <img
        className="rounded-full"
        src="Injectie.png"
        width={64}
        height={64}
        alt="React Logo"
      />
      <nav className="flex gap-4 text-lg">
        {routes.map(({ path, label }) => (
          <NavLink key={path} to={path} className={getActiveClass}>
            {label}
          </NavLink>
        ))}
      </nav>
      <button onClick={toggleTheme}>
        {theme === "dark" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};

export default Navigation;
