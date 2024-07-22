import { chromium, expect, test } from "@playwright/test";

test("Register test", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(
    " //a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  );
  await page.click("'Register'");
  await page.fill("#input-firstname", "Nikito");
  await page.fill("#input-lastname", "Ti");
  await page.fill("#input-email", "Test3@abb.bb");
  await page.fill("#input-telephone", "883201225");
  await page.fill("#input-password", "Qwerty123");
  await page.fill("#input-confirm", "Qwerty123");

  await page.isChecked("#input-newsletter-no");
  await page.click(
    "//div[@class='custom-control custom-checkbox custom-control-inline']"
  );
  const submitButton = page.locator("//input[@type='submit']");
  const isVisible = await submitButton.isVisible();
  expect(isVisible).toBe(true);
  await submitButton.click();

  expect(page.url()).toBe(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/success"
  );

  await page.waitForTimeout(1000);
});
