const { test, expect, chromium } = require('@playwright/test');
const {LoginPage} = require('../POM/LoginPage.js');
const {ProductPage} = require('../POM/ProductsPage.js')
const testData = require('../testData.json'); // Import test data



test('Mini Project', async ({page}) => {
   
  const lp = new LoginPage(page);
  await lp.navigateTo();
  const{username , password} = testData.validUser();
  await lp.login(username , password);
  const pp = new ProductPage(page);
  await pp.selectProductAndAddToCart();




   
  //Checkout & UserDetails page
  await page.locator('#checkout').click();
  await page.locator('[data-test="firstName"]').fill('Jivita');
  await page.locator('[data-test="lastName"]').fill('Trends');
  await page.locator('[data-test="postalCode"]').fill('600040');
  await page.getByRole('button', { name: 'CONTINUE' }).click();

  //Finish Page
  await page.mouse.wheel(0, 500);
  await page.waitForSelector("//div[@data-test='payment-info-value']")
  const orderId = await page.locator("//div[@data-test='payment-info-value']").textContent();
  await page.locator('#finish').click();
  await page.screenshot({path: 'test-results/Screenshot' +Date.now() + 'swagLab.png'})
  console.log(`My order id is ${orderId}`);
  await page.pause();
});
