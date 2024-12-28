const{test , expect} = require('@playwright/test');
const { waitForDebugger } = require('inspector/promises');

test('InputBox' , async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/')
 await page.getByPlaceholder('Enter Name').fill("Jivita");
 await page.waitForTimeout(2000);
await expect(await page.getByPlaceholder('Enter Name')).toHaveValue('Jivita');
await expect(await page.getByPlaceholder('Enter EMail')).toBeEnabled();
await expect(await page.getByPlaceholder('Enter EMail')).toBeEmpty();
await page.waitForTimeout(2000);
 await page.getByPlaceholder('Enter EMail').fill("Jivita.sv@gamil.com");
 await expect(await page.getByPlaceholder('Enter Phone')).toBeEditable();
 await expect(await page.getByPlaceholder('Enter Phone')).not.toBeDisabled();
 await page.waitForTimeout(2000);
 await page.getByPlaceholder('Enter Phone').fill("9080883631");
await page.locator('#textarea').fill("Aminjikarai Chennai - 600031");

})

test('CheckBox', async({page}) =>{
 await page.goto('https://testautomationpractice.blogspot.com/')
 await page.locator("//input[@value='female']").check();
 await page.waitForTimeout(2000);
 await expect(await page.locator("//input[@value='female']")).toBeChecked();
 await expect(await page.locator("//input[@value='male']").isChecked()).toBeFalsy();
 await page.waitForTimeout(2000);
 
 await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
 const checkBoxes = await page.$$("//legend[text()='Checkbox Example']/following::input[@type='checkbox']");

 for(const checkBox of checkBoxes){
    if (!(await checkbox.isChecked())) {
        await checkbox.check();
        console.log('Checkbox selected!');
 }
 
}
})


