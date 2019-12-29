import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  @font-face {
      font-family: 'Faktum Medium';
      src: url('/public/fonts/Faktum-Medium.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.body}px;
  }
`;

export default GlobalStyle;
