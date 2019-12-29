import React from 'react';
import styled from 'styled-components';
import { Button, Text, Box } from 'rebass/styled-components';

const CtaWrapper = styled(Box)`
  font-size: ${p => p.theme.fontSizes[4]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: ${p => p.theme.lineHeights.body};
`;

const StyledButton = styled(Button)`
  width: fit-content;
  align-self: center;
`;

const StyledText = styled(Text)`
  align-self: center;
`;

const Cta = (props) => {
  const { content } = props;
  return (
    <CtaWrapper pb={5}>
      <StyledText>{content.text}</StyledText>
      <StyledButton variant='primary'>{content.btn}</StyledButton>
    </CtaWrapper>
  );
};

export default Cta;
