import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SpecialHomePage from "../pages/specialHomePage";
import AddToCardPage from "../pages/addToCardPage";
import ShopingCartPage from "../pages/shopingCartpage";
import exp from "constants";
import CheckOutPage from "../pages/checkOutPage";
import ConfirmCheckOutPage from "../pages/confirmCheckoutPage";
import SuccessPage from "../pages/successPage";

const email = "testcaseNT1@abv.bb";
const phone = "088888888";
const password = "Qwerty123";

// Тест за регистрация
test("Register test_01", async ({ page, baseURL }) => {
  const register = new RegisterPage(page);
  await page.goto(`${baseURL}route=account/register`);
  await register.enterFirstName("niki");
  await register.enterLasttName("Tenev");
  await register.enterEmail(email);
  await register.enterPhone(phone);
  await register.enterPassword(password);
  await register.enterConfirmPaasword(password);
  await register.clickTermandCondition();
  await page.waitForTimeout(1000);
  await register.clickContinueBtn();

  await page.waitForTimeout(3000);
});

// Тест за вход
test("Login test_02", async ({ page, baseURL }) => {
  const login = new LoginPage(page);
  await page.goto(`${baseURL}route=account/login`);
  await login.enterEmail(email);
  await login.enterLoginPassword(password);
  await login.clickLoginBtn();

  await page.waitForTimeout(3000);
});

// Потребителска история, която комбинира регистрация, вход и добавяне на продукт в количката
test("user story test_03", async ({ page, baseURL }) => {
  const login = new LoginPage(page);
  const homePage = new HomePage(page);
  const specialHomePage = new SpecialHomePage(page);
  const registerPage = new RegisterPage(page);
  const addToCardPage = new AddToCardPage(page);
  const shopingCartpage = new ShopingCartPage(page);

  // Регистрация
  await page.goto(`${baseURL}route=account/register`);
  await registerPage.register("niki", "Tenev", email, phone, password);

  // Вход
  await page.goto(`${baseURL}route=account/login`);
  await login.login(email, password);

  // Навигация до началната страница и избор на продуктова група
  await homePage.enterHomeBtn();
  await homePage.selectProductGroup();

  // Добавяне на първия продукт в количката
  await specialHomePage.addFirstProductOnTheCart();

  // Клик върху бутона за преглед на количката
  await addToCardPage.clickToCartBtn();

  // Проверка на заглавието на страницата
  expect(await page.title()).toBe("Shopping Cart");

  // Изтриване на продукта от кошницата
  await shopingCartpage.deleteFirstProduct();

  // Кликване на бутона "Continue"
  await shopingCartpage.clickToContinue();

  // expect(await page.title()).toBe("Your Store");

  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
  );

  await page.waitForTimeout(3000);
});

test("user story test_04", async ({ page, baseURL }) => {
  const login = new LoginPage(page);
  const homePage = new HomePage(page);
  const specialHomePage = new SpecialHomePage(page);
  // const registerPage = new RegisterPage(page);
  const addToCardPage = new AddToCardPage(page);
  const shopingCartpage = new ShopingCartPage(page);

  // Вход
  await page.goto(`${baseURL}route=account/login`);
  await login.login(email, password);

  // Навигация до началната страница и избор на продуктова група
  await homePage.enterHomeBtn();
  await homePage.selectProductGroup();

  await specialHomePage.openProductPage();

  // Добавяне на първия продукт в количката
  await specialHomePage.addFirstProductOnTheCart();

  //Добавяне на втори продукт в количката
  await specialHomePage.addSecondProductOnTheCart();

  //Добавяне на трети продукт
  await specialHomePage.addThirdProduct();

  // Проверка на избраната стойноста
  await specialHomePage.checkValue("$76.00");

  // Клик върху бутона за преглед на количката
  await addToCardPage.clickToCartBtn();

  // Проверка на заглавието на страницата
  expect(await page.title()).toBe("Shopping Cart");

  // Изтриване на първия продукт от кошницата
  await shopingCartpage.deleteFirstProduct();

  await page.waitForTimeout(1000);

  // Изтриване на втория продукт от кошницата
  await shopingCartpage.deleteFirstProduct();

  await page.waitForTimeout(1000);

  // Изтриване на третия продукт от кошницата
  await shopingCartpage.deleteFirstProduct();

  // Кликване на бутона "Continue"
  await shopingCartpage.clickToContinue();

  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
  );

  await page.waitForTimeout(3000);
});

test("user story test_05", async ({ page, baseURL }) => {
  const login = new LoginPage(page);
  const homePage = new HomePage(page);
  const specialHomePage = new SpecialHomePage(page);
  const addToCardPage = new AddToCardPage(page);
  const shopingCartpage = new ShopingCartPage(page);
  const checkOutPage = new CheckOutPage(page);
  const confirmCheckoutPage = new ConfirmCheckOutPage(page);
  const successPage = new SuccessPage(page);

  // Вход
  await page.goto(`${baseURL}route=account/login`);
  await login.login(email, password);

  // Навигация до началната страница и избор на продуктова група
  await homePage.enterHomeBtn();
  await homePage.selectProductGroup();

  await specialHomePage.openProductPage();

  //Добавяне на третия продукт
  await specialHomePage.addThirdProduct();

  // Проверка на избраната стойноста
  await specialHomePage.checkValue("$76.00");

  shopingCartpage.clickCheckoutBtn();

  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/checkout"
  );


  // Попълва чекаут креденшълите в страницата
  await checkOutPage.fillPhoneNumber();
  await checkOutPage.selectAddressBtn();
  await checkOutPage.firstNameFill();
  await checkOutPage.lastNameFill();
  await checkOutPage.companyFieldFill();
  await checkOutPage.adressFieldFill();
  await checkOutPage.cityFill();
  await checkOutPage.postCodeFill();
  await checkOutPage.countrySelect();
  await page.waitForTimeout(1000);
  await checkOutPage.regionSelect();
  await checkOutPage.addComment();
  await page.waitForTimeout(1000);
  await checkOutPage.checkTermsAndCondotions();
  await checkOutPage.clickContinueBtnOnCheckoutPage();



// Натиска бутона Confirm
  await confirmCheckoutPage.ConfirmOrderBtn();


// Проверява на правилния URL ли отива.
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=checkout/success"
  );


  // Натиска бутона Continue  in Success page
  await successPage.ContinueSuccessBtn();


  // Проверява на правилния URL ли е 
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
  );

  await page.waitForTimeout(3000);
});
