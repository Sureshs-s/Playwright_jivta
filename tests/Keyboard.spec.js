const {test , expect} = require('@playwright/test');


test('Keyboard Actions' , async({page})=>{

await page.goto('https://www.facebook.com/')

await page.locator('#email')

await page.keyboard.type('Hello this is trendnologies')
await page.waitForTimeout(3000);
await page.locator('#pass').click()
await page.keyboard.type("This is jivita")
await page.waitForTimeout(3000);

await page.keyboard.press('Enter');
await page.waitForTimeout(3000);

await page.goto('https://www.instagram.com/')
await page.locator("//input[@name='username']").click();
await page.keyboard.insertText("Jivita is a trainer")
await page.waitForTimeout(3000);

await page.keyboard.down('Control')
await page.keyboard.press('A')
await page.keyboard.up('Control')
await page.waitForTimeout(3000);


await page.keyboard.down('Control')
await page.keyboard.press('C')
await page.keyboard.up('Control')
await page.waitForTimeout(3000);

await page.keyboard.press('Tab')

await page.waitForTimeout(3000);

await page.keyboard.press('Control+V')
await page.waitForTimeout(3000);


})