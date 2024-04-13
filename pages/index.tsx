// /pages/index.tsx

import React, { useState } from 'react';
import ScraperForm from '@/app/components/ScraperForm';
import ListingDisplay from '@/app/components/ListingDisplay';
import Filters from '@/app/components/Filters';

const Home: React.FC = () => {
  const [listings, setListings] = useState<any[]>([]);

  const handleSubmit = async (url: string) => {
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Property Listings</h1>
      <ScraperForm onSubmit={handleSubmit} />
      <Filters />
      <ListingDisplay listings={listings} />
    </div>
  );
};

export default Home;
