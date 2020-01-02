import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';

import Label from '~/components/Label';
import Link from '~/components/Link';

const StyledBox = styled(Box)`
  font-family: ${p => p.theme.fonts.headline};
`;

const Footer = p => {
  const { content } = p;
  const color = useStoreState(state => state.color.color);
  return (
    <Flex>
      <StyledBox 
        width={1/2}
      >
        <Label content="©2020, Fabian Dinklage"/>
      </StyledBox>
      <StyledBox 
        sx={{ textAlign: 'end' }} 
        width={1/2}
      >
        <Link mr={[3,4,4]} sx={{ textDecoration: 'none', color: color[0] }} variant="nav" href="/legal">
          Legal Note
        </Link>
        <Link sx={{ textDecoration: 'none', color: color[0] }} variant="nav" href="https://twitter.com/fdnklg">
          Twitter
        </Link>
      </StyledBox>
    </Flex>
  );
};

export default Footer;
