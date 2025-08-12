import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://dependency-injectors.github.io/WebDevKurs/",
  },
  projects: [
    {
      name: "chromium",
      use: { channel: "chrome" },
    },
  ],
});
