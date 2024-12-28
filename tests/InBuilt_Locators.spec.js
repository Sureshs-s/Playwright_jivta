const{test , expect} = require('@playwright/test');

test('InBuilt Locators', async({page})=>{

await page.goto('https://www.amazon.in/');
//await page.getByRole('searchbox').fill('MOBILES');
//await page.getByPlaceholder('Search Amazon.in').fill('Laptop');
await page.getByText('Mobiles').click();
await page.goBack();
await page.getByLabel('Search Amazon.in').fill('LIPSTICK');
await page.waitForTimeout(1000);
//await page.press('[value="Go"]' , 'Enter');
await page.waitForTimeout(1000);
})