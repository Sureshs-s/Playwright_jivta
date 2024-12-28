const { test, expect } = require('@playwright/test');

test('Mouse over' ,async ({page})=>{
await page.goto('https://www.myntra.com/');
await page.setViewportSize({ width: 1920, height: 1080 });


const kids = await page.locator("(//a[text()='Kids'])[1]");
const toys = await page.locator("//a[text()='Soft Toys']");

await kids.hover();
await toys.hover();

await toys.click();
await page.pause();
})