import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Results } from './Results';

export const Routes = () => (
  <div className="p-4">
    <Switch>
      <Route exact path="/search">
        <Results />
      </Route>
      <Route path="/images">
        <Results />
      </Route>
      <Route path="/news">
        <Results />
      </Route>
      <Route path="/videos">
        <Results />
      </Route>

    </Switch>
  </div>

);
