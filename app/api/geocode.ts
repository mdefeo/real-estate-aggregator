import fetch from 'node-fetch';

async function fetchGeocodeData(address: string): Promise<any> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch geocode data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching geocode data:', error);
    throw error;
  }
}

function extractCoordinates(geocodeData: any): { lat: number, lng: number } {
  const { results } = geocodeData;
  if (results && results.length > 0) {
    const { geometry } = results[0];
    if (geometry && geometry.location) {
      const { lat, lng } = geometry.location;
      return { lat, lng };
    }
  }
  throw new Error('Failed to extract coordinates from geocode data');
}

export { fetchGeocodeData, extractCoordinates };
