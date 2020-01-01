import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Flex, Button } from 'rebass/styled-components';

const StyledLayoutSwitchesWrapper = styled(Flex)`
  font-size: ${p => p.theme.fontSizes[2]};
  font-family: ${p => p.theme.fonts.headline};
`;

const StyledButton = styled(Button)`
  &:hover {
    color: ${p => p.c[1]};
    background: ${p => p.c[0]};
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

  return (
    <StyledLayoutSwitchesWrapper>
      {switches.map((btn,i) => {
        return <Button sx={{ background: 'none', color: color[0] }} p={0} mr={3} mb={4} key={i} onClick={() => { setLayout(btn.value) }}>{btn.value}</Button>}
      )}
    </StyledLayoutSwitchesWrapper>
  );
};

export default LayoutSwitch;