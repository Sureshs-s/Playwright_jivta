const { test, expect } = require('@playwright/test');

test('Multiple Dropdown' ,async ({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('Username').fill("admin");
await page.getByPlaceholder('Password').fill("admin123");
await page.waitForTimeout(4000);

await page.click("//button[@type='submit']");

await page.waitForTimeout(3000);

await page.locator("//ul[@class='oxd-main-menu']/descendant::a[2]").click();

await page.waitForTimeout(2000);

await page.locator('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]').click();

await page.waitForTimeout(2000);
const options = await page.$$("//div[@role='listbox']/child::div/child::span");

for(let option of options){
    const jobTitle = await option.textContent();
    
    console.log(jobTitle);
}
})