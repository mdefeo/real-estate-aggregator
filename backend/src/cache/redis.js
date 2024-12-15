import Redis from 'ioredis';
// Create a new Redis connection
const redis = new Redis();
// Cache a listing
async function cacheListing(id, data) {
    await redis.set(`listing:${id}`, JSON.stringify(data));
}
// Get a cached listing
async function getCachedListing(id) {
    const cachedListing = await redis.get(`listing:${id}`);
    return cachedListing ? JSON.parse(cachedListing) : null;
}
export { cacheListing, getCachedListing };
