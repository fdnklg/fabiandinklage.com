import React, { useEffect } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from '../../../history';
import { useStoreState, useStoreActions } from 'easy-peasy';
import AppWrapper from './AppWrapper';

const base = '/:(en|de)?';

const App = p => {
  const userLang = navigator.language.split(/[-_]/)[0] == 'de' ? 'de' : 'en';
  const setBase = useStoreActions(actions => actions.setBase);
  const base = useStoreState(state => state.base);

  useEffect(() => {
    let lang;
    if (history.location.pathname.includes('/en')) {
      lang = 'en';
    }
    if (history.location.pathname.includes('/de')) {
      lang = 'de';
    }

    if (lang === 'de' || lang === 'en') {
      setBase(lang);
    } else {
      setBase(userLang);
      history.push(`/home/${userLang}`);
    }
  }, []);

  const NotFoundRoute = () => <Redirect to={`/home/${base}`} />;
  return (
    <Router history={history}>
      <Switch>
        {base && <Route path={['/']} component={AppWrapper} />}
        {base && <Route component={NotFoundRoute} />}
      </Switch>
    </Router>
  );
};

export default App;
