const {test , expect} = require('@playwright/test');


test('Alert' , async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable dialog window
    page.on('dialog' , async dialogBox=>{
    expect(dialogBox.type()).toContain('alert')
    expect(dialogBox.message()).toContain('I am an alert box!');
    await dialogBox.accept();
    })

    await page.click("//button[text()='Simple Alert']");
})

