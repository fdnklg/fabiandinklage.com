import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Image, Text } from 'rebass/styled-components/';
import LazyLoad from 'react-lazyload';
import ProgressiveImage from 'react-progressive-image';
import { opacityFromState, positionFromState } from '~/utils/animation';
import { useStoreState } from 'easy-peasy';
import Transition from 'react-transition-group/Transition';

import Label from '~/components/Label';

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  @media (max-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: column;
  }
`;

const MediaWrapper = styled.div`
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

  transition: all ${p => p.theme.times[0]} ease-in-out;
`;

const Media = props => {
  const { data, timeout } = props;
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
        <MediaWrapper
          state={state}
          isPrerendering={isPrerendering}
        >
          {data.map((media, i) => {
            return (
              <Box pb={[4, 5]}>
                <ProgressiveImage
                  key={`media-key-${i}`}
                  src={media.url}
                  placeholder={media.lazy}
                >
                  {src => (
                    <Image
                      src={media.url}
                      alt={media.alt}
                      mb={2}
                      sx={{
                        width: ['100%'],
                      }}
                    />
                  )}
                </ProgressiveImage>

                <Label
                  key={`media-label-${i}`}
                  align="center"
                  content={media.content}
                ></Label>
              </Box>
            );
          })}
        </MediaWrapper>
      )}
    </Transition>
  );
};

export default Media;
