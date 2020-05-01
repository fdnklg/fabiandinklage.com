import React from 'react';
import { hydrate, render } from "react-dom";
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';

import Store from '~/state/Store';
import GlobalStyle from '~/style/GlobalStyle';
import defaultTheme from '~/style/themes/default';
import App from '~/containers/App';

const rootElement = document.getElementById('root');

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

if (rootElement.hasChildNodes()) {
  hydrate(
    <StoreProvider store={Store}>
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyle />
          {/* <DynamicGlobalStyle /> */}
          <App />
        </>
      </ThemeProvider>
    </StoreProvider>,
    rootElement
  );
} else {
  render(
    <StoreProvider store={Store}>
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyle />
          {/* <DynamicGlobalStyle /> */}
          <App />
        </>
      </ThemeProvider>
    </StoreProvider>,
    rootElement
  );
}
