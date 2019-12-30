import React from 'react';
import { Box, Flex, Link, Text, Button } from 'rebass/styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';

import Logo from '../Logo';

const StyledFlex = styled(Flex)`
  color: ${p => p.c[0]};
`;

const Nav = () => {
  const setColor = useStoreActions(actions => actions.color.setColor);
  const color = useStoreState(state => state.color.color);
  return (
    <StyledFlex c={color} alignItems="center">
      <Logo />
      <Text fontWeight="bold">
        Fabian Dinklage
      </Text>
      {/* <Button onClick={setColor}>Surprise me!</Button> */}
      <Box mx="auto" />
      <Link sx={{ textDecoration: 'none', color: color[0] }}  mr={4} variant="nav" href="/profile">
        Profile
      </Link>
      <Link sx={{ textDecoration: 'none', color: color[0] }}  mr={4} variant="nav" href="/">
        Projects
      </Link>
      <Link sx={{ textDecoration: 'none', color: color[0] }}  variant="nav" href="/contact">
        Contact
      </Link>
    </StyledFlex>
  );
};

export default Nav;
