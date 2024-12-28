class Utils{


static async scrollDown(page, distance) {
    await page.mouse.wheel(0, distance);
  }

  static async scrollUp(page, distance) {
    await page.mouse.wheel(0, distance);
  }

  static async waitForTimeout(page, duration) {
    await page.waitForTimeout(duration);
  }

  static async waitForElementVisible(page, selector) {
    await page.waitForSelector(selector, { state: 'visible' });
  }

  static async waitForElementHidden(page, selector) {
    await page.waitForSelector(selector, { state: 'hidden' });
  }

  static async hoverOverElement(page, selector) {
    await page.hover(selector);
  }

  static async dragAndDrop(page, sourceSelector, targetSelector) {
    const source = await page.locator(sourceSelector);
    const target = await page.locator(targetSelector);
    await source.dragTo(target);
  }

  static async rightClick(page, selector) {
    await page.click(selector, { button: 'right' });
  }

  static async clearAndType(page, selector, text) {
    await page.fill(selector, ''); // Clear the field
    await page.type(selector, text); // Type the new text
  }

  static async pressKey(page, selector, key) {
    const element = await page.locator(selector);
    await element.press(key);
  }

  static async clickIfVisible(page, selector) {
    const isVisible = await page.isVisible(selector);
    if (isVisible) {
      await page.click(selector);
    }
  }

  static async getElementText(page, selector) {
    return await page.textContent(selector);
  }

  static async navigateTo(page, url) {
    await page.goto(url, { waitUntil: 'load' });
  }

  static async captureScreenshot(page, filePath, options = { fullPage: true }) {
    await page.screenshot({ path: filePath, ...options });
  }

  static async selectDropdownByValue(page, selector, value) {
    await page.selectOption(selector, { value });
  }

  static async selectDropdownByText(page, selector, label) {
    await page.selectOption(selector, { label });
  }

  static async acceptAlert(page) {
    page.on('dialog', async (dialog) => {
      await dialog.accept();
    });
  }

  static async dismissAlert(page) {
    page.once('dialog', async (dialog) => {
      await dialog.dismiss();
    });
  }

  

}

module.exports = Utils;