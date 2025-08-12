export type Theme = "dark" | "light";

export type ThemeContextTypes = {
  theme: Theme;
  toggleTheme: () => void;
};
