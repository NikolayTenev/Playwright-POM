import { Page } from "@playwright/test";

// Клас за специалната начална страница
export default class ShopingCartPage {
  constructor(public page: Page) {}

  async deleteFirstProduct() {
    await this.page.click("//*[@class='btn btn-danger']");
  }

  async clickToContinue() {
    await this.page.click("//*[@class='buttons']//a");
  }

  async clickCheckoutBtn() {
    // Проверете дали елементът е видим
    const isVisible = await this.page
      .locator("//*[@id='entry_212965']")
      .isVisible();

    if (isVisible) {
      // Кликнете на елемента ако е видим
      await this.page.locator("//*[@id='entry_212965']").click();
    } else {
      console.log("The 'Checkout' button is not visible.");
    }
  }
}
