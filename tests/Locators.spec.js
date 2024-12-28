const{test , expect } = require('@playwright/test'); 

test('Locators' , async ({page})=>{
await page.goto('https://www.facebook.com/');
await page.reload();
await page.locator("//input[@type= 'text']").fill("Jivita");
await page.fill('id=pass' , 'Pass2123');
await page.click('[type="submit"]');
await page.waitForTimeout(1000);
await page.goto('https://www.instagram.com/');
await page.goto('https://www.amazon.in/');
await page.fill('#twotabsearchtextbox' , 'mobiles');
await page.waitForTimeout(3000);
await page.press('[value="Go"]' , 'Enter');
await page.waitForTimeout(1000);

let currentUrl = await page.url();
console.log(currentUrl);
await page.waitForTimeout(1000);
await page.goto('https://www.makemytrip.com/');
await page.goBack();
await page.goForward();
await page.waitForTimeout(3000);
const titleName = await page.title();
console.log(titleName);
await page.waitForTimeout(2000);
await page.close(); 
})
