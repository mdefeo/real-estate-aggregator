// /utils/dbConnect.ts
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database | null = null;

export async function openDatabase(): Promise<Database> {
  if (!db) {
    db = await open({
      filename: './db/listings.db',
      driver: sqlite3.Database,
    });
  }
  return db;
}

export async function closeDatabase(): Promise<void> {
  if (db) {
    await db.close();
    db = null;
  }
}
