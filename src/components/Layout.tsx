import { use } from "react";
import { Outlet } from "react-router";

import ThemeContext from "../lib/ThemeContext.js";

import Navigation from "./Navigation.js";
const Layout = () => {
  const { theme } = use(ThemeContext);
  return (
    <div
      className={`flex flex-col min-h-screen dark:text-white dark:bg-black ${
        theme === "light" ? "" : "dark"
      }`}
    >
      <header>
        <Navigation />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 WebDev Kollaborationsprojekt. Ein Lernprojekt für
          GitHub-Zusammenarbeit.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-500"
            href="https://github.com/Dependency-Injectors/WebDevKurs"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-500"
            href="https://github.com/Dependency-Injectors/WebDevKurs/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dokumentation
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-500"
            href="https://github.com/Dependency-Injectors/WebDevKurs/blob/main/ONBOARDING.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beitragen
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
