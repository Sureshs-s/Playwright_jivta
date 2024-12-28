const { test, expect } = require('@playwright/test');

test('WebTable Interaction ', async ({ page }) => {
    
    await page.goto('https://letcode.in/table');

     const rows = await page.locator("//table[@id='simpletable']/tbody/tr")
     console.log("Number of Rows: " + await rows.count())

    const columns =  await page.locator("//table[@id='simpletable']/thead/tr/th");
    console.log("Number of Columns: " + await columns.count())

    //Retrive All data

    console.log("All Table Data:");
for(let i = 1; i <= await rows.count(); i++) {
    const rowData = await page.locator(`//table[@id='simpletable']/tbody/tr[${i}]/td`);
    const cellTexts = await rowData.allTextContents();
    console.log(`Row ${i}:`, cellTexts);
}
});





test.only('Sample' , async({page})=>{
await page.goto("https://www.tutorialspoint.com/selenium/practice/webtables.php")

const columns = await page.locator("//table/thead/tr/th");
const columnscount = await columns.count();
console.log("Number of Columns : " + columnscount)

const rows = await page.locator("//table/tbody/tr");
const rowsCount = await rows.count();
console.log("Number of Columns : " + columnscount)

//To Retrive all Data
for(let i=1; i<=rowsCount; i++){
    const rowData = await page.locator(`//table/tbody/tr[${i}]/td`);
    const cellData = await rowData.allTextContents();
    console.log(`Row ${i} : ${cellData}`)

}


//To Retrive a specific row

const rowData1 = await page.locator(`//table/tbody/tr[3]/td`);
    const cellData1 = await rowData1.allTextContents();
    console.log(`Row 3 Datas are ${cellData1}`)

//To Retrive a specific text

const rowData2 = await page.locator(`//table/tbody/tr[3]/td[3]`);
    const cellData2 = await rowData2.textContent();
    console.log(`Row 3 , column 3 Data is ${cellData2}`)

    

})


test('Cosmo', async({page})=>{
await page.goto('https://cosmocode.io/automation-practice-webtable/');
await page.mouse.wheel(0,700);

await page.locator("//table/tbody/tr").filter({
    
    
    has: await page.locator("//strong[text()='Afghanistan']/parent::td/preceding-sibling::td/input").check()
})
await page.waitForTimeout(5000);


})




