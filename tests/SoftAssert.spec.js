const{test , expect} = require('@playwright/test');
const exp = require('constants');

test('SoftAssert' , async ({page})=>{
await page.goto('https://practice.expandtesting.com/');

//await expect(page).toHaveTitle('Practice Test Automation WebSite');
//await expect(await page.locator('#main-title')).toBeVisible();
//await expect(await page.locator('#main-title')).toContainText('Website for Web');

//Soft

await expect.soft(page).toHaveTitle('Practice Test Automation WebSite123');
await expect(await page.locator('#main-title')).toBeVisible();
await expect(await page.locator('#main-title')).toContainText('Website for Web');

})
