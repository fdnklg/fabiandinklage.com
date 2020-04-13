import React from 'react';
import { hydrate, render } from "react-dom";
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';

import Store from '~/state/Store';
import GlobalStyle from '~/style/GlobalStyle';
import defaultTheme from '~/style/themes/default';
import App from '~/containers/App';

const rootElement = document.getElementById('root');

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
