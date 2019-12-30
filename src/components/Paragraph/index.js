import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledParagraph = styled(ReactMarkdown)`
  text-align: center;
  color: ${p => p.c[0]};
  line-height: ${p => p.theme.lineHeights.body};
  align-self: center;

  p {
    margin: 0 !important;

    @media (max-width: ${p => p.theme.sizes.mobile}) {
      text-align: left;
    }
  }

`;

const Paragraph = p => {
  const { content, color } = p;
  return <StyledParagraph c={color} source={content} />;
};

export default Paragraph;
