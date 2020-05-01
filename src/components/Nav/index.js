import React, { useEffect } from 'react';
import { Box, Flex, Text, Button } from 'rebass/styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';
import history from '../../../history';
import { getPosition } from '../../utils';

import Logo from '~/components/Logo';
import Label from '~/components/Label';
import Link from '~/components/Link';
import RouterLink from '~/components/RouterLink';
import { content } from '~/data';

const StyledFlex = styled(Flex)`
  color: ${p => p.c[0]};
  font-family: ${p => p.theme.fonts.headline};
  opacity: 1;
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const StyledLabel = styled.span`
  @media (max-width: ${p => p.theme.sizes.mobile}) {
    display: none;
  }
`;

const StyledLanguageSwitch = styled.span``;

const Nav = p => {
  const { timeout } = p;
  const setBase = useStoreActions(actions => actions.setBase);
  const base = useStoreState(state => state.base);
  const navContent = content[base].nav;
  const color = useStoreState(state => state.color.color);

  const handleLanguage = () => {
    setBase();
  };

  useEffect(() => {
    const location = history.location.pathname;
    const pos = getPosition(history.location.pathname, '/', -1);
    const newLocation = location.slice(0, pos - 3) + '/' + base;
    history.push(newLocation);
  }, [base]);

  return (
    <StyledFlex c={color} alignItems="center">
      <Box
        sx={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}
        ml={2}
      >
        <RouterLink color={color} to={`/home/${base}`}>
        <Flex sx={{ alignItems: 'center' }}>
          <Logo c={color} />
          <StyledLabel>Fabian Dinklage</StyledLabel>
        </Flex>
        </RouterLink>
      </Box>
      <Box mx="auto" />
      <Box
        sx={{ textDecoration: 'none', color: color[0], cursor: 'pointer' }}
        mr={[3, 3, 4]}
        c={color}
        variant="nav"
      >
        <RouterLink
          disabled={history.location.pathname !== `/home/${base}`}
          color={color}
          to={`/home/${base}`}
        >
          {navContent.projects}
        </RouterLink>
      </Box>
      <Box
        sx={{ textDecoration: 'none', color: color[0] }}
        mr={[3, 3, 4]}
        variant="nav"
        href={`/profile/${base}`}
      >
        <RouterLink
          disabled={history.location.pathname !== `/profile/${base}`}
          color={color}
          to={`/profile/${base}`}
        >
          {navContent.profile}
        </RouterLink>
      </Box>
      <Box
        sx={{ textDecoration: 'none', color: color[0] }}
        variant="nav"
        mr={[3, 3, 4]}
        href={`/contact/${base}`}
      >
        <RouterLink
          disabled={history.location.pathname !== `/contact/${base}`}
          color={color}
          to={`/contact/${base}`}
        >
          {navContent.contact}
        </RouterLink>
      </Box>
      <StyledLanguageSwitch onClick={() => handleLanguage()}>
        {base === 'en' ? 'DE' : 'EN'}
      </StyledLanguageSwitch>
    </StyledFlex>
  );
};

export default Nav;
