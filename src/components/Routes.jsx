import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ImageResults } from './ImageResults';
import { NewsResults } from './NewsResults';
import { SearchResults } from './SearchResults';
import { VideoResults } from './VideoResults';

export const Routes = () => (
  <div className="p-4">
    <Switch>
      <Route exact path="/">
        <SearchResults />
      </Route>
      <Route path="/images">
        <ImageResults />
      </Route>
      <Route path="/news">
        <NewsResults />
      </Route>
      <Route path="/videos">
        <VideoResults />
      </Route>
    </Switch>
  </div>
);
