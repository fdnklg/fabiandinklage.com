import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { opacityFromState, positionFromState } from '~/utils/animation';
import Transition from 'react-transition-group/Transition';

const StyledUl = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 0;
  line-height: 150%;
  color: ${p => p.c};

  li {
    color: ${p => p.c};
    opacity: ${props => opacityFromState(props.state)} !important;
    transform: ${props => positionFromState(props.state)} !important;
    transition: all ${p => p.theme.times[1]} ease-in-out;

    @media (max-width: ${p => p.theme.sizes.tablet}) {
      text-align: left;
    }

    @media (max-width: ${p => p.theme.sizes.mobile}) {
      text-align: left;
    }
  }
`;

const List = p => {
  const { children,color, timeout } = p;
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledUl state={state} c={color}>{children}</StyledUl>
       )}
    </Transition>
  )
}

export default List;
