import { Page } from "@playwright/test";

// Клас за специалната начална страница
export default class SuccessPage {
  constructor(public page: Page) {}

  async ContinueSuccessBtn() {
    await this.page.locator("//*[@class='btn btn-primary']").click();
  }
}
