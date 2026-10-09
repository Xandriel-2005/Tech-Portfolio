import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'C:/Users/DELL/.gemini/antigravity-ide/brain/aa8c27de-303d-4d18-a84c-e1016685786b/screenshot.png', fullPage: true });
  await browser.close();
  console.log('Screenshot saved');
})();
