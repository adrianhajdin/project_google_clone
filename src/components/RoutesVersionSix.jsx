import React from 'react'
import {Navigate, useRoutes} from 'react-router-dom';
import { Results } from './Results';


export const Routes = () => {
  const elements  = useRoutes([
    {path: "/", element: <Navigate to="/search"/>},
    { path: "/search", element: <Results /> },
    { path: "/videos", element: <Results /> },
    { path: "/images", element: <Results /> },
    { path: "/news", element: <Results /> },
  ]);

  return elements;
}
