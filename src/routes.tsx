import React from "react";

import Help from "./pages/Help";
import Home from "./pages/Home";
import Pawel from "./pages/Pawel";
import Sven from "./pages/Sven";

export interface RouteConfig {
  path: string;
  label: string;
  element: React.ReactElement;
  isStudent?: boolean; // Optional, default false
}

export const routes: RouteConfig[] = [
  { path: "/", label: "Home", element: <Home />, isStudent: false },
  { path: "/Hilfe", label: "Hilfe", element: <Help />, isStudent: false },
  { path: "/Sven", label: "Sven", element: <Sven />, isStudent: true },
  { path: "/Pawel", label: "Pawel", element: <Pawel />, isStudent: true },
];
