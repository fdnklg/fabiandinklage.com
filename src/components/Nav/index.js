import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Button } from 'rebass/styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import {
  opacityFromState,
  positionFromState,
  positionTopFromState,
} from '~/utils/animation';
import history from '../../../history';
import { getPosition } from '../../utils';

import Logo from '~/components/Logo';
import Label from '~/components/Label';
import Link from '~/components/Link';
import RouterLink from '~/components/RouterLink';
import { content } from '~/data';

const StyledFlex = styled(Flex)`
  font-family: ${p => p.theme.fonts.headline};
  opacity: ${props => {
    if (props.isPrerendering) {
      return 0;
    } else {
      return opacityFromState(props.state);
    }
  }};

  transform: ${props => {
    if (props.isPrerendering) {
      return 'translateY(-20px)';
    } else {
      return positionTopFromState(props.state);
    }
  }};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  color: ${p => p.c[0]};
  background: lighten("${p => p.c[1]}", 5);
`;

const StyledLabel = styled.span`
  @media (max-width: ${p => p.theme.sizes.mobile}) {
    display: none;
  }
`;

const StyledLanguageSwitch = styled.span`
  padding: 5px;
  width: 35px;
  display: flex;
  align-items: center;
  height: 35px;
  border: 1px solid ${p => p.color[0]};
  border-radius: 135px;
  justify-content: center;
  color: ${p => p.color[0]};
  cursor: pointer;
  transition: all ${p => p.theme.times[0]} ease-in-out;

  &:hover {
    color: ${p => p.color[1]};
    background: ${p => p.color[0]};
    transition: all ${p => p.theme.times[0]} ease-in-out;
  }
`;

const Nav = p => {
  const { timeout } = p;
  const setBase = useStoreActions(actions => actions.setBase);
  const base = useStoreState(state => state.base);
  const navContent = content[base].nav;
  const color = useStoreState(state => state.color.color);
  const [first, setFirst] = useState(false);

  const handleLanguage = lang => {
    const location = history.location.pathname;
    const pos = getPosition(history.location.pathname, '/', -1);
    const newLocation = location.slice(0, pos - 2) + lang;
    setBase(lang);
    history.push(newLocation);
  };

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledFlex c={color} alignItems="center" state={state}>
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
            sx={{
              textDecoration: 'none',
              color: color[0],
              cursor: 'pointer',
              transition: 'all .125s ease-in-out',
              opacity: history.location.pathname !== `/home/${base}` ? 0.4 : 1,
            }}
            mr={[3, 3, 4]}
            c={color}
            variant="nav"
          >
            <RouterLink
              disabled={!history.location.pathname.includes('projects')}
              color={color}
              to={`/home/${base}`}
            >
              {navContent.projects}
            </RouterLink>
          </Box>
          <Box
            sx={{
              textDecoration: 'none',
              color: color[0],
              transition: 'all .125s ease-in-out',
              opacity:
                history.location.pathname !== `/profile/${base}` ? 0.4 : 1,
            }}
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
            sx={{
              textDecoration: 'none',
              color: color[0],
              transition: 'all .125s ease-in-out',
              opacity:
                history.location.pathname !== `/contact/${base}` ? 0.4 : 1,
            }}
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
          <StyledLanguageSwitch
            color={color}
            onClick={() => handleLanguage(base === 'de' ? 'en' : 'de')}
          >
            {base === 'en' ? 'DE' : 'EN'}
          </StyledLanguageSwitch>
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Nav;
