import { Page } from "@playwright/test";

// Клас за специалната начална страница
export default class ConfirmCheckOutPage {
  constructor(public page: Page) {}

  async ConfirmOrderBtn() {
    await this.page.locator("#button-confirm").click();
  }
}
