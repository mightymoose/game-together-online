import { test, expect } from "@playwright/test";
import { AppPage } from "./app.page";

test("has title", async ({ page }) => {
  const app = new AppPage(page);

  await app.goto();
  await expect(app.heading).toBeVisible();
});
