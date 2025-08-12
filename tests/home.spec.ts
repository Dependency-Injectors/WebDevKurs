import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://dependency-injectors.github.io/WebDevKurs/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Vite + React");

  const h1 = page.locator("h1");
  await expect(h1).toHaveCount(1);
  await expect(h1).toHaveText(/Gemeinsam lernen,/i);
});
