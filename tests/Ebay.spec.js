const {test , expect} = require('@playwright/test');

test('Ebay website' , async({page}) =>{

await page.goto("https://www.ebay.com/");

const cartButton = page.locator("//a[@aria-label='Your shopping cart']");
await cartButton.hover();

await page.waitForTimeout(3000);
const message1 = await page.locator("//h2[contains(text(),'Your cart is empty')]");
expect(await message1.textContent()).toContain("Your cart is empty");

const message2 = await page.locator("//span[text()='Time to start shopping!']");
expect(await message2.textContent()).toContain("Time to start shopping!");

});











