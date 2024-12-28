const {test , expect} = require('@playwright/test');


test('Assertions' , async({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html");

    //1)await expect(page).toHaveURL()	Page has a URL

    await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html');

    //2) ToHaveTitle

    await expect(page).toHaveTitle('Register');

    //3 ToBeVisible

    const logo = await page.locator('id=imagetrgt');
    await expect(logo).toBeVisible();

    //To Be Checked

    const radioButton = await page.locator("//input[@value='FeMale']");
    radioButton.click();
    await page.waitForTimeout(4000);

    await expect(radioButton).toBeChecked();

    //To Be Enabled

    const firstName = await page.getByPlaceholder('First Name')
    await expect(firstName).toBeEnabled();
    firstName.fill("Jivita");
    await page.waitForTimeout(2000);


    //To Have Text

    await expect(await page.locator("//button[@value='Refresh']")).toHaveText('Refresh')

    //To Contains Text
    await expect(await page.locator("//button[@value='Refresh']")).toContainText('fresh')


    //To Have Value

    await expect(firstName).toHaveValue('Jivita');
})