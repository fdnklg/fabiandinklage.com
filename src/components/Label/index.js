import React from 'react';
import { Box, Flex, Link, Text, Button } from 'rebass/styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';

const StyledText = styled(Text)`
  letter-spacing: ${ p => p.theme.letterSpacing[2] };
  text-align: ${ p => p.align} 
  }};
`;

const Label = (p) => {
  const color = useStoreState(state => state.color.color);
  const { content, align } = p;
  return <StyledText align={align} sx={{ textDecoration: 'none', color: color[0] }}>{content}</StyledText>;
}

export default Label;