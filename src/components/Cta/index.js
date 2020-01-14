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
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const StyledText = styled(Text)`
  align-self: center;
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
        <StyledFlex state={state} pt={0} pb={[4,5,5,6]} width={[1, 4/5, 3/4, 2/3]} fontSize={[3,4,5]}>
          <StyledText>{content.text}</StyledText>
            <Button c={color} mt={[3,4]} px={3} py={2} fontSize={[2,3]}>{content.btn}</Button>
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Cta;
