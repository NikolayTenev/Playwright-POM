import { Page } from "@playwright/test";

// Клас за регистриране на потребител
export default class RegisterPage {
  // Конструкторът приема Playwright страница като параметър
  constructor(public page: Page) {}

  // Метод за изпълнение на цялостната регистрация
  async register(firstname: string, lastname: string, email: string, phone: string, password: string) {
    await this.enterFirstName(firstname);         // Въвеждане на име
    await this.enterLasttName(lastname);          // Въвеждане на фамилия
    await this.enterEmail(email);                 // Въвеждане на имейл
    await this.enterPhone(phone);                 // Въвеждане на телефон
    await this.enterPassword(password);           // Въвеждане на парола
    await this.enterConfirmPaasword(password);    // Потвърждаване на парола
    await this.clickTermandCondition();           // Кликване на условията
    await this.clickContinueBtn();                // Кликване на бутона за продължаване
  }

  // Метод за въвеждане на име
  async enterFirstName(firstname: string) {
    await this.page.locator("#input-firstname").type(firstname);
  }

  // Метод за въвеждане на фамилия
  async enterLasttName(lasttname: string) {
    await this.page.locator("#input-lastname").type(lasttname);
  }

  // Метод за въвеждане на имейл
  async enterEmail(email: string) {
    await this.page.locator("#input-email").type(email);
  }

  // Метод за въвеждане на телефон
  async enterPhone(phone: string) {
    await this.page.locator("#input-telephone").type(phone);
  }

  // Метод за въвеждане на парола
  async enterPassword(password: string) {
    await this.page.locator("#input-password").type(password);
  }

  // Метод за потвърждаване на парола
  async enterConfirmPaasword(confirmpassword: string) {
    await this.page.locator("#input-confirm").type(confirmpassword);
  }

  // Метод за проверка дали опцията за абонамент е избрана
  async isSubscribeChecked() {
    return this.page.locator("#input-newsletter-no").isChecked();
  }

  // Метод за кликване на полето с условията
  async clickTermandCondition() {
    this.page.click("//div[@class='buttons clearfix']//div[@class='custom-control custom-checkbox custom-control-inline']");
  }

  // Метод за кликване на бутона за продължаване и изчакване на навигация
  async clickContinueBtn() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.click("input[value='Continue']"),
    ]);
  }
}
