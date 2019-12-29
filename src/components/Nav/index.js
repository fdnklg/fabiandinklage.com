import React from 'react';
import { Box, Flex, Link, Text, Button } from 'rebass/styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
  color: ${p => p.c[0]};
`;

const Nav = () => {
  const setColor = useStoreActions(actions => actions.color.setColor);
  const color = useStoreState(state => state.color.color);
  return (
    <StyledFlex c={color} alignItems="center">
      <Text fontWeight="bold">
        Fabian Dinklage
      </Text>
      {/* <Button onClick={setColor}>Surprise me!</Button> */}
      <Box mx="auto" />
      <Link mr={4} variant="nav" href="/profile">
        Profile
      </Link>
      <Link mr={4} variant="nav" href="/">
        Projects
      </Link>
      <Link variant="nav" href="/contact">
        Contact
      </Link>
    </StyledFlex>
  );
};

export default Nav;
