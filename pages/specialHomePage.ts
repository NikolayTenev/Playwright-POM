import { expect, Page } from "@playwright/test";

// Клас за специалната начална страница
export default class SpecialHomePage {
  // Конструкторът приема Playwright страница като параметър
  constructor(public page: Page) {}

  async openProductPage() {
    const elementHandle = this.page.locator("a[title='Lumix S Series From Panasonic']").click();
    
  }
  // Метод за добавяне на първия продукт в количката
  async addFirstProductOnTheCart() {
    await this.page.hover("//*[@id='mz-product-grid-image-32-212439']");
    await this.page.locator("//*[@class='btn btn-cart cart-32']").click(); // Кликва върху първия бутон "Add to Cart"
  }

  async addSecondProductOnTheCart() {
    await this.page.hover("//*[@id='mz-product-grid-image-34-212439']");
    await this.page.locator("//*[@class='btn btn-cart cart-34']").click();
  }

  async addThirdProduct() {
    await this.page.hover("//*[@id='mz-product-grid-image-42-212439']");
    await this.page.locator("//*[@class='btn btn-cart cart-42']").click();

    // Намира дропдауна и избира зададената стойност.
    const element = this.page.locator("//*[@id='input-option231-212958']");
    await element.selectOption({ value: "35" });

    // Кликва бутона Add to cart
    await this.page
      .locator(
        "//*[@class='text btn btn-md btn-secondary btn-block btn-cart button-cart cart-42']"
      )
      .click();
  }

  async checkValue(value) {

    // Локатор за елемента със стойност
    const priceLocator = this.page.locator("//*[@class='price-new mb-0']");

    // Получаване на текстовото съдържание на елемента
    const priceText = await priceLocator.textContent();

    // Проверка на текстовото съдържание
    expect(priceText).toBe(value);
    console.log("Price text:", priceText);
  }


  // Метод за проверка дали toast съобщението е видимо
  async isToastVisible() {
    const toast = this.page.locator("//a[@class='btn btn-primary btn-block']"); // Локатор за toast съобщението
    // В този метод трябва да има проверка за видимостта на toast съобщението
    return toast.isVisible();
  }
}
