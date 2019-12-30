import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';

import Label from '~/components/Label';

const StyledParagraph = styled(ReactMarkdown)`
  font-size: ${p => p.theme.fontSizes[4]};
  text-align: center;
  line-height: ${p => p.theme.lineHeights.body};
`;

const StyledBox = styled(Box)`
  font-family: ${p => p.theme.fonts.headline};
`;

const Footer = p => {
  const { content } = p;
  return (
    <Flex>
      <StyledBox width={1/2}><Label content="Copyright 2020, Fabian Dinklage"/></StyledBox>
      <StyledBox sx={{ textAlign: 'end' }} width={1/2}><Label content="Twitter Legal Note"/></StyledBox>
    </Flex>
  );
};

export default Footer;
