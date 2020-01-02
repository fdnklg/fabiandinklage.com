import React from 'react';
import styled from 'styled-components';
import { Text, Box, Flex } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';

import Button from '~/components/Button';

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  flex-direction: column;
`;

const StyledText = styled(Text)`
  align-self: center;
`;

const Cta = (props) => {
  const { content } = props;
  const color = useStoreState(state => state.color.color);
  return (
    <StyledFlex pt={0} pb={[5,6]} width={[1, 4/5, 3/4, 2/3]} fontSize={[3,4,5]}>
      <StyledText>{content.text}</StyledText>
        <Button c={color} mt={[3,4]} px={3} py={2} fontSize={[2,3]}>{content.btn}</Button>
    </StyledFlex>
  );
};

export default Cta;
