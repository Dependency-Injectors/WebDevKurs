import React from "react";
import { NavLink } from "react-router";

const getActiveClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-blue-500 font-bold" : undefined;

const Navigation = () => {
  return (
    <div className="flex items-center justify-between">
      <img src="react.svg" alt="React Logo" />
      <nav className="flex gap-4">
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>
        <NavLink to="/Sven" className={getActiveClass}>
          Sven
        </NavLink>
        <NavLink to="/Pawel" className={getActiveClass}>
          Pawel
        </NavLink>
    
      </nav>
      <div></div>
    </div>
  );
};

export default Navigation;
