const {test , expect} = require('@playwright/test');


test('Static table' , async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.mouse.wheel(0,400);
    await page.waitForTimeout(7000);
const rows = await page.locator("[name='BookTable'] tbody tr");
const rowsCount = await rows.count();
console.log('No of Rows : ' +rowsCount)


const columns = await page.locator("[name='BookTable'] tbody tr th");
const columnsCount = await columns.count();
console.log('No of Columns : ' +columnsCount)

for(let i = 2 ; i<=rowsCount; i++){
 const Allvalues = await page.locator(`[name='BookTable'] tbody tr:nth-child(${i}) td`).allTextContents();
 console.log(`Rows ${i} : ` + Allvalues)
}

const specificRow = await page.locator("[name='BookTable'] tbody tr:nth-child(5) td").allTextContents();
console.log('Rows 5 : ' + specificRow)

const specificData = await page.locator("[name='BookTable'] tbody tr:nth-child(5) td:nth-child(2)").textContent();
console.log('Master in selenium is : ' + specificData)

const rows1 =await page.locator("#productTable tbody tr");
await page.locator("#productTable tbody tr:nth-child(2) td input").check();

for(let i=0 ; i<=await rows1.count(); i++){

     const row = rows1.nth(i);
     const tds = row.locator('td');

     for(let j=0 ; j< await tds.count()-1; j++){
        const td =   tds.nth(j);
      const text = await td.textContent();
      console.log(text)
     }

}







   })