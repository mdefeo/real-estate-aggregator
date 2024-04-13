import React from 'react';

interface FiltersProps {
}

const Filters: React.FC<FiltersProps> = () => {

  return (
    <div>
      <h2>Filters</h2>
      <label>
        Filter by Price:
        <input type="text" placeholder="Enter price range" />
      </label>
      <label>
        Filter by Beds:
        <input type="number" placeholder="Enter number of beds" />
      </label>
    </div>
  );
};

export default Filters;
