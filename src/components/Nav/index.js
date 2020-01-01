import React from 'react';
import { Box, Flex, Text, Button } from 'rebass/styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';


import Logo from '~/components/Logo';
import Label from '~/components/Label';
import Link from '~/components/Link';

const StyledFlex = styled(Flex)`
  color: ${p => p.c[0]};
  font-family: ${p => p.theme.fonts.headline};
`;

const Nav = () => {
  const setColor = useStoreActions(actions => actions.color.setColor);
  const color = useStoreState(state => state.color.color);
  return (
    <StyledFlex c={color} alignItems="center">
      <Logo />
      <Link ml={2} href="/" fontWeight="bold">
        <Label content="Fabian Dinklage"></Label>
      </Link>
      {/* <Button onClick={setColor}>Surprise me!</Button> */}
      <Box mx="auto" />
      <Link sx={{ textDecoration: 'none', color: color[0], cursor: 'pointer' }}  mr={[3,3,4]} variant="nav" href="/">
        <Label content="Projects"></Label>
      </Link>
      <Link sx={{ textDecoration: 'none', color: color[0] }}  mr={[3,3,4]} variant="nav" href="/profile">
        <Label content="Profile"></Label>
      </Link>
      <Link sx={{ textDecoration: 'none', color: color[0] }}  variant="nav" href="/contact">
        <Label content="Contact"></Label>
      </Link>
    </StyledFlex>
  );
};

export default Nav;
