import React from "react";
import { Outlet } from "react-router";
import Navigation from "./Navigation.js";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="min-h-16 px-4 py-6 bg-gray-900 text-gray-50 border-t-4 border-t-amber-400">Footer</footer>
    </div>
  );
};

export default Layout;
