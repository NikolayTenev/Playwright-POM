import { chromium, test } from "@playwright/test";

test("login test demo", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(" //a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.click("'Login'");
  await page.fill("#input-email", "Test1@abb.bb");
  await page.fill("#input-password", "Qwerty123");
  await page.click("input[value='Login']");

  await page.waitForTimeout(3000);
});
