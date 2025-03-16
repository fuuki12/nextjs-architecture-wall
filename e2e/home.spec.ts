import { test, expect } from "@playwright/test";

test("ホームページが正しく表示される", async ({ page }) => {
  await page.goto("/");

  // タイトルが正しいことを確認
  await expect(page).toHaveTitle(/Next.js/);

  // ページの内容を確認
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toBeVisible();
});
