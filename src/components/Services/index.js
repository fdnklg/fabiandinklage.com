import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { opacityFromState } from '~/utils/animation';
import { Box, Flex, Text } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';

import Title from '../Title/';

const StyledBox = styled(Box)`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  color: ${p => p.c[0]};
  background: lighten("${p => p.c[1]}", 5);
`;

const Services = p => {
  const { content, timeout } = p;
  const color = useStoreState(state => state.color.color);

  useEffect(() => {
    console.log('serveices!', content);
  });

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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mb: [5, 6],
            px: ['0%', '5%', '5%', '10%']
          }}
        >
          <Title timeout={625} source='Services' color={color} />
          {content.map(tile => (
            <Flex
              sx={{
                alignItems: 'center',
                mt: [2],
                mb: [4],
                flexDirection: ['column', 'column', 'row', 'row']
              }}
            >
              <Text
                sx={{ 
                  fontFamily: 'headline', 
                  width: ['100%', '100%', '25%','30%'],
                  letterSpacing: '0.125px',
                  lineHeight: 'heading',
                  pr: '40px',
                  mb: ['2', '2','2', '0']
                }}
                fontSize={[3, 3, 4, 5]}
              >
                {tile.title}
              </Text>
              <Text
                sx={{ 
                  fontFamily: 'body', 
                  width: ['100%', '100%', '70%', '70%'],
                  lineHeight: 'body',
                  opacity: .5,
                  letterSpacing: '0.125px'
                }}
                fontSize={[3]}
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
