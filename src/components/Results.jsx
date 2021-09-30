import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) {
    return <Loading />;
  }
  const LoadResults = () => {
    switch (location.pathname) {
      case '/search':
        return (
          <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
            {results?.results?.map((result, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <a href={result.link} target="_blank" rel="noreferrer">
                  <p className="text-sm">
                    {result?.link?.length > 30
                      ? result.link.substring(0, 30)
                      : result.link}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{result.title}</p>
                </a>
              </div>
            ))}
          </div>
        );
      case '/images':
        return (
          <div className="flex flex-wrap justify-center items-center">
            {
                    results?.image_results?.map((item, index) => (
                      <a href={item.link?.href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                        <img src={item.image?.src} alt={item.link?.title} loading="lazy" />
                        <p className="sm:w-36 w-36 break-words text-sm mt-2">{ item.link?.title}</p>
                      </a>
                    ))
                }
          </div>
        );
      case '/news':
        return (
          <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
            {
                    results?.entries?.map((news) => (
                      <div key={news.id} className="md:w-2/5 w-full ">
                        <a href={news.links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                          <p className="text-lg dark:text-blue-300 text-blue-700">{news.title}</p>
                        </a>
                        <div className="flex gap-4">
                          <a href={news.source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {news.source?.href}</a>
                        </div>
                      </div>

                    ))
                }
          </div>
        );
      case '/videos':
        return (
          <div className="flex flex-wrap ">
            {
                results?.results?.map((video, index) => (
                  <div key={index} className="p-2">
                    <ReactPlayer
                      url={video.additional_links?.[0].href}
                      controls
                      width="355px"
                      height="200px"
                    />
                  </div>

                ))
                }
          </div>
        );
      default:
    }
  };
  return (
    <>
      {LoadResults()}
    </>
  );
};
