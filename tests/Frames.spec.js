const {test , expect} = require('@playwright/test')

test('Frames' , async({page})=>{
await page.goto('https://letcode.in/frame');

const allframes  = await page.frames();
console.log("Number of frames : " + allframes.length);

const firstName = await page.frame({name :'firstFr'});

await firstName.fill("//input[@name='fname']", 'Jivita');

const secondName = await page.frame({url : 'https://letcode.in/frameUI'});
await secondName.fill("//input[@name='lname']","Sudhan");









//  const email = await page.frame({url :'https://letcode.in/innerFrame'});
//  await email.fill("//input[@placeholder='Enter email']","jivita@trends");
 

//approach 2

const lastName = await  page.frameLocator("//iframe[@id='firstFr']");
await lastName.fill("//input[@name='lname']","Happy");



})