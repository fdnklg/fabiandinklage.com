import React from 'react';
import styled from 'styled-components';
import { Text, Box, Flex } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';
import Transition from "react-transition-group/Transition";
import { opacityFromState } from '~/utils/animation';

import Button from '~/components/Button';

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  flex-direction: column;
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[0]} ease-in-out;
`;

const StyledText = styled(Text)`
  align-self: center;
  transition: all ${p => p.theme.times[0]} ease-in-out;
`;

const StyledA = styled.a`
  padding-top: 20px;
  align-self: center;
  text-decoration: none;
`;

const Cta = (props) => {
  const { content, timeout } = props;
  const color = useStoreState(state => state.color.color);
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledFlex state={state} pt={0} pb={[5,6,6,6]} width={[1, 4/5, 3/4, 2/3]} fontSize={[3,4,4,5]}>
          <StyledText fontSize={[3,4,4,5]}>{content.text}</StyledText>
          <StyledA href="mailto:mail@fabiandinklage.com">
            <Button c={color} mt={[3,4,5]} px={3} py={2} fontSize={[3,4,4,4]}>{content.btn}</Button>
          </StyledA>
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Cta;
