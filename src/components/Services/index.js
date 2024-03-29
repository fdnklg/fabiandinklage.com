import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { opacityFromState, positionFromState } from '~/utils/animation';
import { Box, Flex, Text } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';

import Title from '../Title/';
import { content } from '~/data';

const StyledBox = styled(Box)`
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
  color: ${p => p.c[0]};
  background: lighten("${p => p.c[1]}", 5);
`;

const Services = p => {
  const { timeout } = p;
  const color = useStoreState(state => state.color.color);
  const isPrerendering = useStoreState(state => state.layout.isPrerendering);
  const base = useStoreState(state => state.base);
  const services = content[base].services;
  const title = content[base].title.services;

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledBox
          c={color}
          state={state}
          isPrerendering={isPrerendering}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            mb: [4, 5, 6],
            px: ['0%', '0%', '0%', '10%'],
          }}
        >
          <Title timeout={timeout} source={title} color={color} />
          {services.map((tile, i) => (
            <Flex
              key={`key-flex-tile-${i}`}
              sx={{
                alignItems: 'center',
                mt: [2],
                mb: i === 0 ? [3, 4] : [0],
                flexDirection: ['column', 'column', 'row', 'row'],
              }}
            >
              <Text
                sx={{
                  fontFamily: 'headline',
                  width: ['100%', '100%', '35%', '40%'],
                  letterSpacing: '0.125px',
                  lineHeight: 'heading',
                  pr: '40px',
                  mb: ['2', '2', '2', '0'],
                }}
                fontSize={[3, 5, 5, 5]}
              >
                {tile.title}
              </Text>
              <Text
                sx={{
                  fontFamily: 'body',
                  width: ['100%', '100%', '65%', '100%'],
                  lineHeight: 'body',
                  opacity: 0.66,
                  letterSpacing: '0.125px',
                }}
                fontSize={[3, 4, 4, 4]}
              >
                {tile.description}
              </Text>
            </Flex>
          ))}
        </StyledBox>
      )}
    </Transition>
  );
};

export default Services;
