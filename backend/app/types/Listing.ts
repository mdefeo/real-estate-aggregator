// /types/Listing.ts
import Coordinates from './Coordinates';

interface Listing {
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
  coordinates: Coordinates;
  image: string;
  mapUrl: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  active: number;
}

export default Listing;
