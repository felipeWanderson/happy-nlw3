import React from 'react';
import Landing from './pages/Landing';
import OrfanatedMap from './pages/OrfarnatedMap';

import {BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app"  component={OrfanatedMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;