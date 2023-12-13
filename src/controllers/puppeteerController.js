const puppeteerService = require('../services/puppeteerService');

const puppeteerController = {

    
  async scrape(req, res) {
    try {
      const { url } = req.body;

      if (!url) {
        return res.status(400).json({ error: 'URL is required in the request body.' });
      }

      const { browser, page } = await puppeteerService.initBrowser();

      await page.goto(url, { waitUntil: 'domcontentloaded' });

      // Example: Get the title of the page
      const title = await page.title();

      // Example: Get all the links on the page
      const links = await page.evaluate(() => {
        const anchorElements = document.querySelectorAll('a');
        return Array.from(anchorElements, (anchor) => anchor.href);
      });

      await puppeteerService.closeBrowser(browser);

      res.json({ title, links });
    } catch (error) {
      console.error('Error in scraping:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async takeScreenshot(req, res) {
    try {
      const { url } = req.body;

      if (!url) {
        return res.status(400).json({ error: 'URL is required in the request body.' });
      }

      const { browser, page } = await puppeteerService.initBrowser();

      await page.goto(url, { waitUntil: 'domcontentloaded' });

      // Example: Take a screenshot
      const screenshot = await page.screenshot();

      await puppeteerService.closeBrowser(browser);

      res.type('image/png').send(screenshot);
    } catch (error) {
      console.error('Error in taking screenshot:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async generatePDF(req, res) {
    try {
      const { url } = req.body;

      if (!url) {
        return res.status(400).json({ error: 'URL is required in the request body.' });
      }

      const { browser, page } = await puppeteerService.initBrowser();

      await page.goto(url, { waitUntil: 'domcontentloaded' });

      // Example: Generate PDF
      const pdfBuffer = await page.pdf();

      await puppeteerService.closeBrowser(browser);

      res.type('application/pdf').send(pdfBuffer);
    } catch (error) {
      console.error('Error in generating PDF:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async webAutomation(req, res) {
    try {
      const { url } = req.body;

      if (!url) {
        return res.status(400).json({ error: 'URL is required in the request body.' });
      }

      const { browser, page } = await puppeteerService.initBrowser();

      await page.goto(url, { waitUntil: 'domcontentloaded' });

      // Example: Perform web automation (click a button)
      await page.click('button#exampleButton');

      // Add more automation logic as needed

      await puppeteerService.closeBrowser(browser);

      res.json({ message: 'Web automation completed successfully.' });
    } catch (error) {
      console.error('Error in web automation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = puppeteerController;
