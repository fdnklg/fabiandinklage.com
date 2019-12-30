import React from 'react';
import { Box, Flex, Link, Text, Button } from 'rebass/styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styled from 'styled-components';

const StyledText = styled(Text)`
  letter-spacing: ${ p => p.theme.letterSpacing[2] };
`;

const Label = (p) => {
  const color = useStoreState(state => state.color.color);
  const { content } = p;
  return <StyledText sx={{ textDecoration: 'none', color: color[0] }}>{content}</StyledText>;
}

export default Label;