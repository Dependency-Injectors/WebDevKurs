import React from "react";
import { NavLink } from "react-router";
import { routes } from "../routes";
const getActiveClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-blue-500 font-bold" : undefined;

const Navigation = () => {
  return (
    <div className="flex items-center justify-between px-4 py-6">
      <img src="react.svg" alt="React Logo" />
      <nav className="flex gap-4">
        {routes.map(({ path, label }) => (
          <NavLink key={path} to={path} className={getActiveClass}>
            {label}
          </NavLink>
        ))}
      </nav>
      <div></div>
    </div>
  );
};

export default Navigation;
