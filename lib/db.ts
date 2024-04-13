// /lib/db.ts
import { Request, Response } from 'express';
import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';

let db: Database | null = null;

async function openDatabase(): Promise<Database> {
  return open({
    filename: './db/listings.db',
    driver: sqlite3.Database,
  });
}

async function initDatabase() {
  db = await openDatabase();
}

export default async function handler(req: Request, res: Response) {
  if (!db) {
    await initDatabase();
  }

  try {
    if (db) {
      const data = await db.all('SELECT * FROM properties');

      res.status(200).json(data);
    } else {
      throw new Error('Database is not initialized.');
    }
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export { openDatabase, db };
