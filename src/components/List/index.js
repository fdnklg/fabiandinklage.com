import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { opacityFromState, positionFromState } from '~/utils/animation';
import Transition from 'react-transition-group/Transition';
import { useStoreState } from 'easy-peasy';

const StyledUl = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 150%;
  color: ${(p) => p.c};

  opacity: ${(props) => {
    if (props.isPrerendering) {
      return 0;
    } else {
      return opacityFromState(props.state);
    }
  }};

  transform: ${(props) => {
    if (props.isPrerendering) {
      return 'translateY(10px)';
    } else {
      return positionFromState(props.state);
    }
  }};

  li {
    color: ${(p) => p.c};
    opacity: ${(props) => {
      if (props.isPrerendering) {
        return 0;
      } else {
        return opacityFromState(props.state);
      }
    }};

    transform: ${(props) => {
      if (props.isPrerendering) {
        return 'translateY(10px)';
      } else {
        return positionFromState(props.state);
      }
    }};
    transition: all ${(p) => p.theme.times[1]} ease-in-out;

    @media (max-width: ${(p) => p.theme.sizes.tablet}) {
      text-align: left;
    }

    @media (max-width: ${(p) => p.theme.sizes.mobile}) {
      text-align: left;
    }
  }
`;

const List = (p) => {
  const { children, color, timeout } = p;
  const isPrerendering = useStoreState((state) => state.layout.isPrerendering);
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {(state) => (
        <StyledUl isPrerendering={isPrerendering} state={state} c={color}>
          {children}
        </StyledUl>
      )}
    </Transition>
  );
};

export default List;
