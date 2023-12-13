const express = require('express');
const puppeteerRoutes = require('./src/routes/puppeteerRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// Add your middleware and other configurations here

app.use('/app', puppeteerRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
