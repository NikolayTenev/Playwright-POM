import { Page } from "@playwright/test";

// Клас за логване на потребител
export default class LoginPage {
  
  // Конструкторът приема Playwright страница като параметър
  constructor(public page: Page) {}

  // Метод за изпълнение на цялостното логване
  async login(email: string, password: string) {
    await this.enterEmail(email);                  // Въвеждане на имейл
    await this.enterLoginPassword(password);       // Въвеждане на парола
    await this.clickLoginBtn();                    // Кликване на бутона за логване
  }

  // Метод за въвеждане на имейл
  async enterEmail(emailaddress: string) {
    await this.page.locator("#input-email").type(emailaddress);
  }

  // Метод за въвеждане на парола
  async enterLoginPassword(loginpassword: string) {
    await this.page.locator("#input-password").type(loginpassword);
  }

  // Метод за кликване на бутона за логване и изчакване на навигация
  async clickLoginBtn() {
    await Promise.all([
      this.page.waitForNavigation(),               // Изчаква навигацията да завърши
      this.page.click("input[value='Login']"),     // Кликва на бутона за логване
    ]);
  }
}
