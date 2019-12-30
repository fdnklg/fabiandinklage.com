import React from 'react';
import styled from 'styled-components';
import { Button, Text, Box, Flex } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  width: fit-content;
  align-self: center;
  background: none;
  border: 2px solid ${p => p.c[0]};
  color: ${p => p.c[0]};
  border-radius: 6px;

  &:hover {
    color: ${p => p.c[1]};
    background: ${p => p.c[0]};
    transition: all ${p => p.theme.times[0]} ease-in-out;
  }
`;

const StyledText = styled(Text)`
  align-self: center;
`;

const Cta = (props) => {
  const { content } = props;
  const color = useStoreState(state => state.color.color);
  return (
    <StyledFlex pt={[4,6]} pb={6} width={[1, 4/5, 3/4, 2/3]} fontSize={[3,4,5]}>
      <StyledText>{content.text}</StyledText>
      <StyledButton c={color} mt={[3,4]} px={3} py={2} fontSize={[2,3]}>{content.btn}</StyledButton>
    </StyledFlex>
  );
};

export default Cta;
