import React from 'react';
import styled from 'styled-components';
import { Text, Box, Flex } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import Button from '~/components/Button';

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  color: ${p => p.c[0]};
  flex-direction: column;

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

const StyledText = styled(Text)`
  align-self: center;
  color: ${p => p.c[0]};
  transition: all ${p => p.theme.times[0]} ease-in-out;
`;

const StyledA = styled.a`
  padding-top: 20px;
  color: ${p => p.c[0]};
  align-self: center;
  text-decoration: none;
`;

const Cta = props => {
  const { content, timeout } = props;
  const color = useStoreState(state => state.color.color);
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
        <StyledFlex
          state={state}
          c={color}
          state={state}
          isPrerendering={isPrerendering}
          pt={0}
          pb={[5, 6, 6, 6]}
          width={[1, 4 / 5, 3 / 4, 2 / 3]}
          fontSize={[3, 4, 4, 5]}
        >
          <StyledText c={color} fontSize={[3, 4, 4, 5]}>{content.text}</StyledText>
          <StyledA c={color} href="mailto:mail@fabiandinklage.com">
            <Button
              c={color}
              mt={[3, 4, 5]}
              px={3}
              py={2}
              fontSize={[2, 3, 3, 3]}
            >
              {content.btn}
            </Button>
          </StyledA>
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Cta;
