import React, { useState } from 'react';

interface ScraperFormProps {
  onSubmit: (url: string) => void;
}

const ScraperForm: React.FC<ScraperFormProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to scrape"
      />
      <button type="submit">Scrape</button>
    </form>
  );
};

export default ScraperForm;
