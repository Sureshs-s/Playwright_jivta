const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/Loginpage.js');
const { ProductPage } = require('../pages/ProductsPage.js');
const testData = require('../testData.json'); // Import test data

test('SwagLabs', async ({page}) => {

  const loginPage = new LoginPage(page);  // Instantiate the LoginPage class
  const productPage = new ProductPage(page);
  const { username, password } = testData.validUser;

  // await page.goto('https://www.saucedemo.com/');
  // //LoginPage
  // await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="password"]').fill('secret_sauce');
  // await page.getByRole('button', { name: 'LOGIN' }).click();
  // expect(await page.locator("//div[text()='Swag Labs']")).toBeVisible();
  await loginPage.navigateToLoginPage();
  await loginPage.login(username, password);
  await loginPage.assertLoginSuccessful();

   //await page.mouse.wheel(0, 500);
  // await page.waitForTimeout(4000);
  // await page.waitForSelector('.inventory_list .inventory_item:nth-child(6) button')
  // await page.locator('.inventory_list .inventory_item:nth-child(6) button').click();
  // await page.mouse.wheel(0, -500);
  // await page.waitForTimeout(4000);
  // await page.locator('.shopping_cart_link').click();
 
  await productPage.selectProduct();
 
 
  // await page.locator('#checkout').click();
  // await page.locator('[data-test="firstName"]').fill('Jivita');
  // await page.locator('[data-test="lastName"]').fill('Trends');
  //   await page.locator('[data-test="postalCode"]').fill('600040');
  // await page.getByRole('button', { name: 'CONTINUE' }).click();


  // await page.mouse.wheel(0, 500);
  // await page.waitForSelector("//div[@data-test='payment-info-value']")
  // const orderId = await page.locator("//div[@data-test='payment-info-value']").textContent();
  // await page.locator('#finish').click();

  
  // await page.screenshot({path: 'test-results/Screenshot' +Date.now() + 'swagLab.png'})
  // console.log(`My order id is ${orderId}`);
  await page.pause();
});