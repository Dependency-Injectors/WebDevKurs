import { ChevronLeft, ChevronRight, Home, Menu, Users, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

import { routes } from "../routes";

const getActiveClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-blue-500 font-bold" : "text-gray-700 hover:text-blue-400";

const Navigation = () => {
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Filtere Routen nach Typ
  const homeRoute = routes.find(route => route.path === "/");
  const regularRoutes = routes.filter(
    route => route.path !== "/" && !route.isStudent
  );
  const studentRoutes = routes.filter(route => route.isStudent === true);

  // Schließe Mobile Sidebar bei Resize auf Desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Verhindere Scrollen wenn Mobile Sidebar offen ist
  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileSidebarOpen]);

  return (
    <>
      <div
        className={`hidden md:block fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg z-40 transition-transform duration-300 ${
          isDesktopSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "280px" }}
      >
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Studenten
            </h2>
            <button
              onClick={() => setIsDesktopSidebarOpen(false)}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          {studentRoutes.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className="block py-3 px-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
              onClick={() => setIsDesktopSidebarOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {isDesktopSidebarOpen && (
        <div
          className="hidden md:block fixed inset-0 bg-black/30"
          onClick={() => setIsDesktopSidebarOpen(false)}
          onKeyDown={e => {
            if (e.key === "Escape") {
              setIsDesktopSidebarOpen(false);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
        />
      )}

      <div
        className={`flex items-center justify-between px-4 py-6 border-b-2 border-b-amber-500 transition-all duration-300 ${
          isDesktopSidebarOpen ? "md:ml-280" : ""
        }`}
        style={{ marginLeft: isDesktopSidebarOpen ? "280px" : "0" }}
      >
        <div className="flex items-center gap-4">
          <img
            className="rounded-full"
            src="Injectie.png"
            width={64}
            height={64}
            alt="React Logo"
          />

          <button
            onClick={() => setIsDesktopSidebarOpen(true)}
            className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-md"
          >
            <ChevronRight className="w-4 h-4" />
            Studenten ({studentRoutes.length})
          </button>
        </div>
        <nav className="hidden md:flex gap-4 text-lg">
          {/* Home Link */}
          {homeRoute && (
            <NavLink
              key={homeRoute.path}
              to={homeRoute.path}
              className={getActiveClass}
            >
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                {homeRoute.label}
              </div>
            </NavLink>
          )}

          {/* Reguläre Routen (keine Studenten) */}
          {regularRoutes.map(({ path, label }) => (
            <NavLink key={path} to={path} className={getActiveClass}>
              {label}
            </NavLink>
          ))}
        </nav>{" "}
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="md:hidden p-2 text-gray-700 hover:text-blue-400 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden md:block" />
      </div>

      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 md:hidden">
          <div
            className="absolute inset-0"
            onClick={() => setIsMobileSidebarOpen(false)}
            onKeyDown={e => {
              if (e.key === "Escape") {
                setIsMobileSidebarOpen(false);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Close mobile sidebar"
          />

          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">
                Navigation
              </h2>
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Home Link */}
              {homeRoute && (
                <NavLink
                  to={homeRoute.path}
                  className="block py-2 text-lg text-gray-700 hover:text-blue-500 transition-colors"
                  onClick={() => setIsMobileSidebarOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    {homeRoute.label}
                  </div>
                </NavLink>
              )}

              {/* Reguläre Routen */}
              {regularRoutes.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className="block py-2 text-lg text-gray-700 hover:text-blue-500 transition-colors"
                  onClick={() => setIsMobileSidebarOpen(false)}
                >
                  {label}
                </NavLink>
              ))}

              {/* Studenten Section */}
              <div>
                <div className="flex items-center gap-2 py-2 mb-2 text-gray-800 font-medium border-b">
                  <Users className="w-5 h-5" />
                  Studenten ({studentRoutes.length})
                </div>

                <div className="grid grid-cols-1 gap-1 pl-4">
                  {studentRoutes.map(({ path, label }) => (
                    <NavLink
                      key={path}
                      to={path}
                      className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"
                      onClick={() => setIsMobileSidebarOpen(false)}
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
