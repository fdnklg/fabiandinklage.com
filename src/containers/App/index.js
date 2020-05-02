import React, { useEffect } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from '../../../history';
import { useStoreState, useStoreActions } from 'easy-peasy';
import AppWrapper from './AppWrapper';

const language = navigator.language.split(/[-_]/)[0];
const base = '/:(en|de)?';


const App = p => {
  var userLang = navigator.language || navigator.userLanguage;
  const setBase = useStoreActions(actions => actions.setBase);
  const base = useStoreState(state => state.base);

  useEffect(() => {
    // history.push(`/home/${base}`)
  }, [])

  const NotFoundRoute = () => <Redirect to={`/home/${base}`} />;
  return (
    <Router history={history}>
      <Switch>
        <Route path={['/']} component={AppWrapper} />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>
  );
}

export default App;
