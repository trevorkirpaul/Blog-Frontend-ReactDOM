import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from 'components/views/Home';
import Header from 'components/views/Header';
import SignUp from 'components/views/SignUp';
import SignIn from 'components/views/SignIn';

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
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};
