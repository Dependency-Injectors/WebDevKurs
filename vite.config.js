import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/WebDevKurs/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["src/**/*.test.{js,ts,tsx}"],
    exclude: [
      "**/node_modules/**",
      "**/tests/**",
      "**/tests-examples/**",
      "**/*.spec.ts",
    ],
  },
});
