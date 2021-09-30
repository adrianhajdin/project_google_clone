import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

const fetchData = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'google-search3.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    },
  });
  const data = await res.json();
  return data;
};

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState({
    searchResults: [],
    newsResults: [],
    imageResults: [],
    videoResults: [],
  });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getSearchResults = async () => {
    setLoading(true);
    const data = await fetchData(`${baseUrl}/search/q=${searchTerm}&num=50`);
    setLoading(false);
    setResults({ searchResults: data });
  };

  const getNewsResults = async () => {
    setLoading(true);
    const data = await fetchData(`${baseUrl}/news/q=${searchTerm}`);
    setResults({ newsResults: data?.entries });
    setLoading(false);
  };

  const getImageResults = async () => {
    setLoading(true);
    const data = await fetchData(`${baseUrl}/images/q=${searchTerm}&num=100`);
    setResults({ imageResults: data });
    setLoading(false);
  };

  const getVideoResults = async () => {
    setLoading(true);
    const data = await fetchData(
      `${baseUrl}/search/q=${searchTerm} videos`,
    );
    setResults({ videoResults: data });
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{
        getSearchResults,
        getVideoResults,
        getImageResults,
        getNewsResults,
        results,
        searchTerm,
        setSearchTerm,
        loading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
