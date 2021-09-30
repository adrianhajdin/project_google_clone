import React, { useEffect } from 'react';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const ImageResults = () => {
  const { results, searchTerm, getImageResults, loading } = useStateContext();

  useEffect(() => {
    if (searchTerm !== '') getImageResults();
  }, [searchTerm]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-wrap justify-center items-center">
      {results?.imageResults?.image_results?.map((item, index) => (
        <a href={item.link?.href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
          <img src={item.image?.src} alt={item.link?.title} loading="lazy" />
          <p className="sm:w-36 w-36 break-words text-sm mt-2">{ item.link?.title}</p>
        </a>
      ))}
    </div>
  );
};
