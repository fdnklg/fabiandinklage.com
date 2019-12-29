import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';

const StyledParagraph = styled(ReactMarkdown)`
  text-align: center;
  color: ${p => p.c[0]};
  line-height: ${p => p.theme.lineHeights.body};
  align-self: center;

  @media (max-width: ${p => p.theme.sizes.mobile}) {
    text-align: left;
  }
`;

const StyledFlex = styled(Flex)`
  margin: 0 auto;
`;

const Paragraph = p => {
  const { content, color } = p;
  return (
    <StyledFlex p={[0,3,4]} width={[1, 4/5, 3/4, 2/3]} fontSize={[3,4,5]}>
      <StyledParagraph c={color} source={content} />
    </StyledFlex>
  );
};

export default Paragraph;
