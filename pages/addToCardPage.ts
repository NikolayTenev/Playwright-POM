import { Page } from "@playwright/test";

// Клас за добавяне на продукти в количката
export default class AddToCartPage {

    // Конструкторът приема Playwright страница като параметър
    constructor(public page: Page) {}

    // Метод за кликване на бутона "Add to Cart"
    async clickToCartBtn() {
        await this.page.click("//a[@class='btn btn-primary btn-block']"); // Кликва на бутона "Add to Cart"
    }

}
