import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { opacityFromState, positionFromState } from '~/utils/animation';
import Transition from 'react-transition-group/Transition';

const StyledTitle = styled(ReactMarkdown)`
  margin: 0 auto;
  opacity: ${props => opacityFromState(props.state)};
  transform: ${props => positionFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  margin-bottom: 15px;
  width: fit-content;
  p {
    margin-bottom: 15px;
    font-family: 'Mier A Bold';
    font-size: ${p => p.theme.fontSizes[2]};
    letter-spacing: 5px;
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
  const { source, timeout } = p;
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledTitle state={state}>{source}</StyledTitle>
      )}
    </Transition>
  )
}

export default Title;
