// /models/Property.ts
import { db } from '@/lib/db';

interface Property {
  id?: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  url: string;
  price: number;
  beds: number;
  baths: number;
  sqFt: number;
  rawData: string;
  description: string;
  propertyType: string;
  yearBuilt: number;
  lat: number;
  long: number;
  image: string;
  mapUrl: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  active: number;
}

class PropertyModel {
  static async getAll(): Promise<Property[]> {
    if (!db) {
      throw new Error('Database is not initialized');
    }
    return await db.all('SELECT * FROM properties');
  }

  static async getById(id: number): Promise<Property | undefined> {
    if (!db) {
      throw new Error('Database is not initialized');
    }
    return await db.get('SELECT * FROM properties WHERE id = ?', id);
  }

  static async create(property: Property): Promise<number> {
    if (!db) {
      throw new Error('Database is not initialized');
    }
    const { lastID } = await db.run(`
      INSERT INTO properties (address, city, state, zip, url, price, beds, baths, sqFt, rawData, description, propertyType, yearBuilt, lat, long, image, mapUrl, active)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      Object.values(property)
    );

    const id = lastID !== undefined ? lastID : -1;
    return id;
  }

}

export default PropertyModel;
