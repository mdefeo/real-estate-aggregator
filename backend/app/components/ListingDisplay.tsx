import React from 'react';
import Listing from '../types/Listing';

interface ListingDisplayProps {
  listings: Listing[];
}

const ListingDisplay: React.FC<ListingDisplayProps> = ({ listings }) => {
  return (
    <div>
      <h2>Listings</h2>
      {listings.map((listing) => (
        <div key={listing.id}>
          <h3>{listing.address}</h3>
          <p>Price: ${listing.price}</p>
          <p>Beds: {listing.beds}</p>
          <p>Baths: {listing.baths}</p>
        </div>
      ))}
    </div>
  );
};

export default ListingDisplay;
