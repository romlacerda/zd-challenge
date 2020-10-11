import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/produtos" component={Products} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
