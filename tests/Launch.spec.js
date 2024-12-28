const{test , expect } = require('@playwright/test'); 

test('Launch' , async({page})=>{
 await page.goto('https://www.facebook.com/');
   
})