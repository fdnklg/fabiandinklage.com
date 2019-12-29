import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreActions } from 'easy-peasy';
import { Flex, Button } from 'rebass/styled-components';

const StyledLayoutSwitchesWrapper = styled(Flex)`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const LayoutSwitch = () => {
  const setLayout = useStoreActions(actions => actions.layout.setLayout);

  const switches = [
    { value: 'Grid'},
    { value: 'List'}
  ]

  return (
    <StyledLayoutSwitchesWrapper>
      {switches.map((btn,i) => {
        return <Button mr={2} mb={2} key={i} onClick={() => { setLayout(btn.value) }}>{btn.value}</Button>}
      )}
    </StyledLayoutSwitchesWrapper>
  );
};

export default LayoutSwitch;