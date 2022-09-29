import React from 'react';
import { useStoreState } from 'easy-peasy';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionTopFromState } from '~/utils/animation';
import history from '../../../history';
import { getPosition } from '../../utils';

import Logo from '~/components/Logo';
import RouterLink from '~/components/RouterLink';
import { content } from '~/data';

const StyledContainer = styled(ReactMarkdown)`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  height: auto;
  text-align: center;
  background: ${p => p.c[0]};
  z-index: 100;
  font-size: ${p => p.theme.fontSizes[3]};
  color: ${p => p.c[2]};
  line-height: 20px;
  letter-spacing: 0.48px;
  padding: 0 16px;

  a {
    color: white;
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
  }
`;

const Nav = p => {
  const { timeout } = p;
  const base = useStoreState(state => state.base);
  const disclaimerContent = content[base].about.disclaimer;
  const color = useStoreState(state => state.color.color);

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledContainer c={color}>{disclaimerContent}</StyledContainer>
      )}
    </Transition>
  );
};

export default Nav;
