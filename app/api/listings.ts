// /app/api/listings.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!db) {
      throw new Error('Database connection is not available');
    }

    const data = await db.all('SELECT * FROM properties');

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
