const puppeteer = require('puppeteer');

const puppeteerService = {
  async initBrowser() {
    // Pass `headless: "new"` to use the new Headless mode
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    return { browser, page };
  },

  async closeBrowser(browser) {
    await browser.close();
  },
};

module.exports = puppeteerService;
