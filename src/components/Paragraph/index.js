import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledParagraph = styled(ReactMarkdown)`
  color: ${p => p.c[0]};
  line-height: ${p => p.theme.lineHeights.body};
`;

const Paragraph = p => {
  const { content, color } = p;
  return <StyledParagraph c={color} source={content} />;
};

export default Paragraph;
