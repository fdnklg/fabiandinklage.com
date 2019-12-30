import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  @font-face {
      font-family: 'Faktum Regular';
      src: url('/public/fonts/Faktum-Regular.woff2') format('woff2');
      font-style: normal;
  }

  @font-face {
      font-family: 'Faktum SemiBold';
      src: url('/public/fonts/Faktum-SemiBold.woff2') format('woff2');
      font-style: normal;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[1]};
  }
`;

export default GlobalStyle;
