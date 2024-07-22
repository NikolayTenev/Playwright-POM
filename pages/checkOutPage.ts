import { Page } from "@playwright/test";

// Клас за специалната начална страница
export default class CheckOutPage {
  constructor(public page: Page) {}

  async ClickLoginBtn() {
    await this.page.locator("//*[@id='input-account-login']").click();
  }

  async fillPhoneNumber() {
    await this.page.locator("//*[@id='input-telephone']").fill("0888888888");
  }

  async selectAddressBtn() {
    await this.page.locator("//*[@for='input-payment-address-new']").click();
  }

  async firstNameFill() {
    await this.page.locator("//*[@id='input-payment-firstname']").fill("niki");
  }

  async lastNameFill() {
    await this.page.locator("//*[@id='input-payment-lastname']").fill("Tenev");
  }

  async companyFieldFill() {
    await this.page
      .locator("//*[@id='input-payment-company']")
      .fill("My Compamy");
  }

  async adressFieldFill() {
    await this.page
      .locator("//*[@id='input-payment-address-1']")
      .fill("Geo Milev");
  }

  async cityFill() {
    await this.page.locator("//*[@id='input-payment-city']").fill("Sofia");
  }

  async postCodeFill() {
    await this.page.locator("//*[@id='input-payment-postcode']").fill("1000");
  }

  async countrySelect() {
    const element = this.page.locator("//*[@id='input-payment-country']");
    await element.selectOption({ value: "33" });
  }
  async regionSelect() {
    const element = this.page.locator("//*[@id='input-payment-zone']");
    await element.selectOption({ value: "485" });
  }

  async checkShippingAddress() {
    // Локатор за елемента с id 'input-shipping-address-same'
    const checkbox = this.page.locator(
      "//*[@id='input-shipping-address-same']"
    );

    // Проверка дали елементът е чекнат
    const isChecked = await checkbox.isChecked();

    // Ако не е чекнат, го маркирайте
    if (!isChecked) {
      await checkbox.check();
    }
  }

  async cashOnDelivery() {
    // Локатор за елемента с кеш плащане
    const checkbox = this.page.locator("//*[@id='input-payment-method-cod']");

    // Проверка дали елементът е чекнат
    const isChecked = await checkbox.isChecked();
  }
  async flatShippingRate() {
    // Локатор за елемента с за шипинг
    const checkbox = this.page.locator(
      "//*[@id='input-shipping-method-flat.flat']"
    );

    // Проверка дали елементът е чекнат
    const isChecked = await checkbox.isChecked();
  }

  // Пише коментар
  async addComment() {
    await this.page
      .locator("//*[@id='input-comment']")
      .fill("I don't like this site");
  }

  async checkTermsAndCondotions() {

    // const Checkbox= 

    await this.page.locator("//*[@for='input-agree']").click();

    // Локатор за елемента с клас 'custom-control custom-checkbox' и тип 'checkbox'
    // const checkbox = this.page.locator("//*[@name='agree']");

    // Превъртане до елемента, за да го направите видим
    // await checkbox.scrollIntoViewIfNeeded();

    // Проверка дали елементът е видим
    //  const isVisible = await checkbox.isVisible();

  
    //   // Повторна проверка на видимостта
    //   isVisible = await checkbox.isVisible();

    //   if (!isVisible) {
    //     // Ако елементът все още не е видим, направете го видим с JavaScript
    //     await this.page.evaluate(() => {
    //       const element = document.querySelector(
    //         "//*[@name='agree']"
    //       );
    //       if (element) {
    //         element.style.display = "block";
    //       }
    //     });

    //     isVisible = await checkbox.isVisible();
    //     if (!isVisible) {
    //       throw new Error("Checkbox is not visible on the page");
    //     }
    //   }

      // Проверка дали елементът е чекнат
    //   const isChecked = await checkbox.isChecked();

      // Ако не е чекнат, го маркирайте
    //   if (!isChecked) {
    //     await checkbox.check();
    //   }
    }
  
  async clickContinueBtnOnCheckoutPage() {
    await this.page.locator("//*[@id='button-save']").click();
  }
}
