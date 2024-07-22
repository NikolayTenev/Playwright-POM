import { Page } from "@playwright/test";

export default class HomePage {
  constructor(public page: Page) {}

  // Метод за кликване върху бутона "Home"
  async enterHomeBtn() {
    await this.page.click("'Home'");
  }

  // Метод за избор на продуктова група
  async selectProductGroup() {
    await this.page.click("#entry_213243");
  }
}
