import React from 'react';
import { Text } from 'rebass/styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';

const StyledText = styled(Text)`
  letter-spacing: ${p => p.theme.letterSpacing[2]};
  text-align: ${p => p.align};
  opacity: ${p => p.disabled ? .5 : 1}
`;

const Label = p => {
  const color = useStoreState(state => state.color.color);
  const { content, align, disabled } = p;
  return (
    <StyledText disabled={disabled} align={align} sx={{ textDecoration: 'none', color: color[0] }}>
      {content}
    </StyledText>
  );
};

export default Label;
