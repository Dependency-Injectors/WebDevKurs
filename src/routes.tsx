import Home from "./pages/Home";
import Sven from "./pages/Sven";
import Pawel from "./pages/Pawel";

export const routes = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/Sven", label: "Sven", element: <Sven /> },
  { path: "/Pawel", label: "Pawel", element: <Pawel /> },
];
