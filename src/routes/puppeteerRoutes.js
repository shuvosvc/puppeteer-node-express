const express = require('express');
const puppeteerController = require('../controllers/puppeteerController');

const router = express.Router();

router.post('/scrape', puppeteerController.scrape);
router.post('/screenshot', puppeteerController.takeScreenshot);
router.post('/pdf', puppeteerController.generatePDF);
router.post('/automation', puppeteerController.webAutomation);

module.exports = router;
