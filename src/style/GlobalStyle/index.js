import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  /* autoprefixer grid: autoplace */

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-family: ${(p) => p.theme.fonts.body};
    font-size: ${(p) => p.theme.fontSizes[1]};
  }
`;

export default GlobalStyle;
