import React, { PureComponent } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from '../../../history';
import AppWrapper from './AppWrapper';

const NotFoundRoute = () => <Redirect to="/" />;

class App extends PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            path={['/', 'profile', 'legal']}
            component={AppWrapper}
          />
          <Route component={NotFoundRoute} />
        </Switch>
      </Router>
    );
  }
}

export default App;
