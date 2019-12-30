import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';

const StyledParagraph = styled(ReactMarkdown)`
  font-size: ${p => p.theme.fontSizes[4]};
  text-align: center;
  line-height: ${p => p.theme.lineHeights.body};
`;

const Footer = p => {
  const { content } = p;
  return (
    <Flex>
      <Box width={1/2}>Copyright 2020, Fabian Dinklage</Box>
      <Box sx={{ textAlign: 'end' }} width={1/2}>Twitter Legal Note</Box>
    </Flex>
  );
};

export default Footer;
