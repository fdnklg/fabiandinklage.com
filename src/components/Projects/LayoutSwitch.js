import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Flex, Button } from 'rebass/styled-components';

const StyledLayoutSwitchesWrapper = styled(Flex)`
  font-size: ${p => p.theme.fontSizes[2]};
  font-family: ${p => p.theme.fonts.headline};
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  transition: all ${p => p.theme.times[0]} ease-in-out;
  color: ${p => p.c[0]};
  background: none;
  &:hover {
    cursor: pointer;
    opacity: .5;
    transition: all ${p => p.theme.times[0]} ease-in-out;
  }
`;

const LayoutSwitch = () => {
  const setLayout = useStoreActions(actions => actions.layout.setLayout);
  const color = useStoreState(state => state.color.color);

  const switches = [
    { value: 'Grid'},
    { value: 'List'}
  ]

  useEffect(() => { console.log(color) })

  return (
    <StyledLayoutSwitchesWrapper>
      {switches.map((btn,i) => {
        return <StyledButton  c={color} p={0} mr={3} mb={4} key={i} onClick={() => { setLayout(btn.value)}}>{btn.value}</StyledButton>}
      )}
    </StyledLayoutSwitchesWrapper>
  );
};

export default LayoutSwitch;