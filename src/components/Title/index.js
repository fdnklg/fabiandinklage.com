import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Title = styled(ReactMarkdown)`
  margin: 0 auto;
  margin-bottom: 15px;
  p {
    margin-bottom: 15px;
    font-family: 'Mier A Bold';
    font-size: ${p => p.theme.fontSizes[2]};
    letter-spacing: 5px;
    text-transform: uppercase;
  }
  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    margin: initial;

    p {
      font-size: ${p => p.theme.fontSizes[2]};
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: ${p => p.theme.sizes.mobile}) {
    margin-bottom: 10px;

  p {
    font-size: ${p => p.theme.fontSizes[0]};
  }
`;

export default Title;