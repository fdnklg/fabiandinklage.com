import React, {useEffect} from 'react';
import { Box, Flex, Text, Button } from 'rebass/styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';
import history from '../../../history';

import Logo from '~/components/Logo';
import Label from '~/components/Label';
import Link from '~/components/Link';

const StyledFlex = styled(Flex)`
  color: ${p => p.c[0]};
  font-family: ${p => p.theme.fonts.headline};
  opacity: 1;
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const StyledLink = styled(Link)`
  @media (max-width: ${p => p.theme.sizes.mobile}) {
    div:last-of-type {
      display: none;
    }
  }
`;

const Nav = p => {
  const { timeout } = p;
  const color = useStoreState(state => state.color.color);
  return (
    // <Transition
    //   in={true}
    //   timeout={timeout}
    //   appear={true}
    //   mountOnEnter={true}
    //   unmountOnExit={true}
    // >
    //   {state => (
        <StyledFlex
          // state={state}
          c={color}
          alignItems="center"
        >
          <StyledLink
            sx={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}
            ml={2}
            href="/"
            fontWeight="bold"
          >
            <Logo c={color} />
            <Label c={color} content="Fabian Dinklage"></Label>
          </StyledLink>
          <Box mx="auto" />
          <Link
            sx={{ textDecoration: 'none', color: color[0], cursor: 'pointer' }}
            mr={[3, 3, 4]}
            c={color}
            variant="nav"
            href="/"
          >
            <Label disabled={history.location.pathname !== '/'} content="Projects"></Label>
          </Link>
          <Link
            sx={{ textDecoration: 'none', color: color[0] }}
            mr={[3, 3, 4]}
            variant="nav"
            href="/profile"
          >
            <Label disabled={history.location.pathname !== '/profile'} content="Profile"></Label>
          </Link>
          <Link
            sx={{ textDecoration: 'none', color: color[0] }}
            variant="nav"
            href="/contact"
          >
            <Label disabled={history.location.pathname !== '/contact'} content="Contact"></Label>
          </Link>
        </StyledFlex>
      /* )}
    </Transition> */
  );
};

export default Nav;
