import { NextApiRequest, NextApiResponse } from 'next';
import { chromium, Browser, Page } from 'playwright';

async function scrapeData(url: string): Promise<any> {
  const browser: Browser = await chromium.launch();

  const page: Page = await browser.newPage();

  try {
    await page.goto(url);

    const data = await page.evaluate(() => {
      const title = document.querySelector('h1')?.textContent?.trim();

      return { title };
    });

    return data;
  } catch (error) {
    console.error('Error occurred during scraping:', error);
    return null;
  } finally {
    await browser.close();
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  try {
    if (!url) {
      throw new Error('URL parameter is missing');
    }

    const data = await scrapeData(url as string);

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
