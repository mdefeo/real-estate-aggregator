import Bull from 'bull';
const scrapeQueue = new Bull('scrapeQueue', {
    redis: { host: 'localhost', port: 6379 },
});
scrapeQueue.process(async (job) => {
    const listings = job.data;
    console.log(listings);
});
