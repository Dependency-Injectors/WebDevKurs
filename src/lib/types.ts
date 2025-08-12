export type Theme = "dark" | "light";

export interface ThemeContextTypes {
  theme: Theme;
  toggleTheme: () => void;
}
