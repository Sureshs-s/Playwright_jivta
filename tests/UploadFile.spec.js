const {test , expect} = require('@playwright/test');


test('Single File' , async({page})=>{

await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

//await page.locator('#filesToUpload').setInputFiles('tests/UploadFile/File_1.png');
await page.locator('#filesToUpload').setInputFiles('E:/JavaScript/Functions.txt');


await page.pause();
})



test.only('Multiple Files' , async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    
    //await page.locator('#filesToUpload').setInputFiles('tests/UploadFile/File_1.png');
    await page.locator('#filesToUpload').setInputFiles(['E:/JavaScript/Functions.txt' , 'tests/UploadFile/PAN CARD.pdf' , 'tests/UploadFile/File_1.png' ]);
    await page.waitForTimeout(5000);

    

    await page.locator('#filesToUpload').setInputFiles([]);
 
    await page.waitForTimeout(5000);
    })