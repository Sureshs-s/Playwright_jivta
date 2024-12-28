 const { test, expect } = require('@playwright/test');

test('WebTable Interaction Using XPath and forEach', async ({ page }) => {
    
    await page.goto('https://letcode.in/table');

    // **Count the number of rows**
    const rows = await page.$$('//table[@id="simpletable"]/tbody/tr'); // XPath to locate rows
    console.log("Number of rows: ", rows.length);

    // **Count the number of columns**
    const columns = await page.$$('//table[@id="simpletable"]/thead/tr/th'); // XPath to locate columns
    console.log("Number of columns: ", columns.length);

    // **Print all data from the table using forEach**
    rows.forEach(async (row, rowIndex) => {
        const cells = await row.$$('td'); // Get all cells (td) in the current row
        const cellData = [];
        for (const cell of cells) {
            const text = await cell.textContent();
            cellData.push(text.trim());
        }
        console.log(`Row ${rowIndex + 1}: `, cellData);
    });

    // **Retrieve data from a specific cell (e.g., second row, first column)**
    const specificCell = await page.locator('//table[@id="simpletable"]/tbody/tr[2]/td[1]').textContent();
    console.log("Data in second row, first column: ", specificCell);

    // **Perform an action (click) in a specific cell**
    await page.locator('//table[@id="simpletable"]/tbody/tr[3]/td[4]//button').click();
    console.log("Clicked the button in third row, fourth column.");

    // **Assertion example (checking specific text in a cell)**
    await expect(page.locator('//table[@id="simpletable"]/tbody/tr[2]/td[2]')).toHaveText("Bruce Wayne");
});






