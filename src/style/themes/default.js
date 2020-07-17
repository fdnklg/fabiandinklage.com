/* eslint-disable */
const px = d => {
  return `${d}px`;
};

const s = d => {
  return `${d}s`;
};

const defaultTheme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: 'lighten(10, #121337)',
    primaryLight: '#E6E6EA',
    secondary: '#30c',
    muted: '#f6f6f9',
    gray: '#D0D0D7',
    highlight: 'hsla(205, 100%, 40%, 0.125)',
    medium: 'hsla(205, 100%, 40%, 0.3)',
  },
  fonts: {
    body: 'Mier A Regular, sans-serif',
    headline: 'Mier A Bold, sans-serif',
  },
  fontSizes: [14, 14, 14, 16, 18, 24, 28, 48, 48].map(px),
  letterSpacing: [0.125, 0.25, 0.5, 1].map(px),
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(px),
  sizes: {
    mobile: '580px',
    tablet: '768px',
    desktop: '1080px',
    hd: '1920px',
  },
  times: [0.128, 0.2, 0.512].map(s),
  radii: {
    default: 4,
    circle: 99999,
  },
};

export default defaultTheme;
