import React, { useEffect } from 'react';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const SearchResults = () => {
  const { results, loading, getSearchResults, searchTerm } = useStateContext();

  useEffect(() => {
    if (searchTerm !== '') getSearchResults();
  }, [searchTerm]);

  if (loading) return <Loading />;

  return (
    <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
      {results?.searchResults?.results?.map((result, index) => (
        <div key={index} className="md:w-2/5 w-full">
          <a href={result.link} target="_blank" rel="noreferrer">
            <p className="text-sm">
              {result?.link?.length > 30 ? result.link.substring(0, 30) : result.link}
            </p>
            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{result.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};
