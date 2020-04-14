import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { opacityFromState, positionFromState } from '~/utils/animation';
import { Image as rebassImage } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';

const StyledImage = styled(rebassImage)`
  opacity: ${props => opacityFromState(props.state)};
  transform: ${props => positionFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const Image = p => {
  const { src, alt, timeout } = p;
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
              src={src}
              alt={alt}
              pb={[4, 5, 5, 6]}
              sx={{
                width: ['100%'],
                alignSelf: 'center',
              }}
            />
      )}
    </Transition>
  )
}

export default Image;
