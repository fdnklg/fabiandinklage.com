import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { opacityFromState, positionFromState } from '~/utils/animation';
import { Image as rebassImage } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';
import { useStoreState } from 'easy-peasy';

const StyledImage = styled(rebassImage)`
  height: auto;
  width: 100%;
  opacity: ${props => {
    if (props.isPrerendering) {
      return 0;
    } else {
      return opacityFromState(props.state);
    }
  }};

  transform: ${props => {
    if (props.isPrerendering) {
      return 'translateY(10px)';
    } else {
      return positionFromState(props.state);
    }
  }};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const Image = p => {
  const { src, alt, timeout } = p;
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
        <StyledImage
          state={state}
          isPrerendering={isPrerendering}
          src={src}
          alt={alt}
          pt={[4, 5, 5, 6]}
          pb={[4, 5, 5, 6]}
          sx={{
            width: ['100%'],
            alignSelf: 'center',
          }}
        />
      )}
    </Transition>
  );
};

export default Image;
