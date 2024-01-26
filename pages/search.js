// pages/search.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [searchResults, setSearchResults] = useState([]);

  // Implement logic to fetch search results based on the query
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        // Replace the following with your actual search logic or API call
        // For now, using an empty array as a placeholder
        const data = []; // Replace with actual search logic

        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    // Fetch search results when the query changes
    if (query) {
      fetchSearchResults();
    } else {
      setSearchResults([]); // Clear search results if no query
    }
  }, [query]);

  return (
    <div className="max-w-screen-md mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <p className="text-lg mb-4">Showing results for: {query}</p>
      <ul className="list-disc pl-4">
        {searchResults.map((result) => (
          <li key={result.id} className="mb-2 text-base font-semibold">
            {result.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
