import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from 'components/views/Home';
import Header from 'components/views/Header';

/*
  `React.Fragment` lets us wrap content without
  the need to render a `div`
*/

export default () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};
