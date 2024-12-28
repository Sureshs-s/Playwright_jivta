const{test , expect , chromium} = require('@playwright/test');


test('Context Sessions' , async()=>{

const browser = await chromium.launch({headless:false , slowMo: 5000 , args: ['--start-maximized'] })
 const user1 =await browser.newContext();
 const pageA = await user1.newPage()
 const pageB =await user1.newPage();
 await pageA.goto('https://playwright.dev/docs/browsers')
 await pageB.goto('https://www.instagram.com/')
 

 const user2 =await browser.newContext()
 const pageC = await user2.newPage()
 await pageC.goto('https://www.facebook.com/')
})


test('Pages', async()=>{

const browser = await chromium.launch({headless:false,})
const user = await browser.newContext()
const page1 = await user.newPage();
const page2 = await user.newPage();
const page3 = await user.newPage();
const page4 = await user.newPage();
const page5 = await user.newPage();

await page1.goto('https://www.instagram.com/');
await page2.goto('https://playwright.dev/docs/browsers');
await page3.goto('https://www.facebook.com/');
await page4.goto('https://in.bookmyshow.com/');
await page5.goto('https://www.myntra.com/');
await page3.bringToFront();

const tabsOpen = user.pages()
console.log(tabsOpen.length)

})


test.only('Handle tabs/Windows/pages'  , async()=>{

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page1 = await context.newPage()
    await page1.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');

    const tab = context.waitForEvent('page')
    await page1.click('#newTabBtn')

    const newPage = await tab;
    const titleOfnewPage = await newPage.title();
    await expect(newPage).toHaveTitle(titleOfnewPage);
    await newPage.mouse.wheel(0, 900); 
    await newPage.waitForTimeout(2000);

    newPage.on('dialog' , async alertBox=>{
       await alertBox.accept('Jivita');
    })

    await newPage.click('#promptBox')
    await newPage.waitForTimeout(3000);

    //expect(await page1.locator('#output').textContent()).toContain('You entered text Jivita in propmt popup');
    //await newPage.waitForTimeout(2000);

    await page1.bringToFront();

    const tab2 = context.waitForEvent('page')
    await page1.click("(//button[contains(text(),'Open Multiple Tabs')])[1]")

    const nextPageA = await tab2;
    await nextPageA.fill('#firstName' , 'Jivita')
    //await nextPageA.locator('#nextPageA').check()
    await newPage.bringToFront();
    await newPage.locator("//a[text()='Contact']").click();
    await newPage.locator("//form[@name='contact-form']/descendant::img").screenshot({path:'test-results/Screenshot' + Date.now() + 'Image.png'})


})




