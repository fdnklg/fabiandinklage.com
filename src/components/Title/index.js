import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useStoreState } from 'easy-peasy';
import { opacityFromState, positionFromState } from '~/utils/animation';
import Transition from 'react-transition-group/Transition';

const StyledTitle = styled(ReactMarkdown)`
  margin: 0 auto;
  opacity: ${props => {
    if (props.isPrerendering) {
      return 0
    } else {
      return opacityFromState(props.state)
    }
  }};

  transform: ${props => {
    if (props.isPrerendering) {
      return 'translateY(10px)'
    } else {
      return positionFromState(props.state)
    }
  }};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  margin-bottom: 15px;
  min-height: 30px;
  width: fit-content;
  color: ${p => p.c[0]};
  p {
    margin-bottom: 15px;
    font-family: 'Mier A Bold';
    font-size: ${p => p.theme.fontSizes[2]};
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    margin: initial;

    p {
      font-size: ${p => p.theme.fontSizes[2]};
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: ${p => p.theme.sizes.mobile}) {
    margin-bottom: 10px;

    p {
      font-size: ${p => p.theme.fontSizes[0]};
    }
  }
`;

const Title = p => {
  const { source, color, timeout } = p;
  const isPrerendering = useStoreState(state => state.layout.isPrerendering);
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledTitle isPrerendering={isPrerendering} state={state} c={color}>{source}</StyledTitle>
       )}
    </Transition>
  )
}

export default Title;
