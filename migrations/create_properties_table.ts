// /migrations/create_properties_table.ts
import { openDatabase } from '@/lib/db';

const up = async (): Promise<void> => {
  const db = await openDatabase();
  await db.run(`
    CREATE TABLE IF NOT EXISTS properties (
      id INTEGER PRIMARY KEY,
      address TEXT,
      city TEXT,
      state TEXT,
      zip TEXT,
      url TEXT,
      price REAL,
      beds REAL,
      baths REAL,
      sqFt REAL,
      rawData TEXT,
      description TEXT,
      propertyType TEXT,
      yearBuilt INTEGER,
      lat REAL,
      long REAL,
      image TEXT,
      mapUrl TEXT,
      dateCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
      dateUpdated DATETIME DEFAULT CURRENT_TIMESTAMP,
      active INTEGER DEFAULT 1
    )
  `);
};

const down = async (): Promise<void> => {
  const db = await openDatabase();
  await db.run('DROP TABLE IF EXISTS properties');
};

export { up, down };
