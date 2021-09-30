import React from 'react';
import { NavLink } from 'react-router-dom';

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    <NavLink to="/search" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">🔎 All</NavLink>
    <NavLink to="/news" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">📰 News</NavLink>
    <NavLink to="/images" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">📸 Images</NavLink>
    <NavLink to="/videos" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">📺 Videos</NavLink>
  </div>
);
