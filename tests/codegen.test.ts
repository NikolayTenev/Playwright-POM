import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.getByRole("button", { name: " My account" }).click();
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("E-Mail Address").click();
  await page.getByPlaceholder("E-Mail Address").fill("Test1@abb.bb");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("Qwerty123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' Mega Menu')]");
  await page.locator(" //a[@title='Apple']").click();
  await page.hover("#mz-product-grid-image-32-212439");
  await page.click("//i[@class='fas fa-shopping-cart']");
  await page.locator("//a[@class='btn btn-primary btn-block']").click();
  await page.isVisible("//input[@style='min-width:3em']");
  await page.locator("//i[@class='fas fa-times-circle']").click();
  await page.getByRole("link", { name: "Continue" }).click();
  await page.getByRole("button", { name: " My account" }).click();
  await page.getByRole("link", { name: "Logout" }).click();
  
  await page.waitForTimeout(3000);
  const currentUrl = page.url();
  expect(currentUrl).toBe('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');
});
