// /app/utils/scraper.ts
import { Browser, Page } from 'playwright';
import playwright from 'playwright';

async function launchBrowser(): Promise<Browser> {
  const browser = await playwright.chromium.launch();
  return browser;
}

async function openPage(browser: Browser): Promise<Page> {
  const page = await browser.newPage();
  return page;
}

async function scrapeData(url: string): Promise<any> {
  const browser = await launchBrowser();
  const page = await openPage(browser);

  try {
    await page.goto(url);
  } catch (error) {
    console.error('Error occurred during scraping:', error);
  } finally {
    await browser.close();
  }
}

export { scrapeData };
