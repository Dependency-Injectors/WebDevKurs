import { createContext } from "react";

import type { ThemeContextTypes } from "./types";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
} as ThemeContextTypes);

export default ThemeContext;
