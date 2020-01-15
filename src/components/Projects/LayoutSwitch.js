import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Flex, Button } from 'rebass/styled-components';
import GridIcon from '!file-loader!~/../public/images/grid.svg';
import ListIcon from '!file-loader!~/../public/images/list.svg';

const StyledLayoutSwitchesWrapper = styled(Flex)`
  font-size: ${p => p.theme.fontSizes[2]};
  font-family: ${p => p.theme.fonts.headline};
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  transition: all ${p => p.theme.times[0]} ease-in-out;
  color: ${p => p.c[0]};
  background: none;
  &:focus { outline:0; }
  &:hover {
    cursor: pointer;
    opacity: .5;
    transition: all ${p => p.theme.times[0]} ease-in-out;
  }
`;

const StyledImg = styled.img`
  height: 24px;
  width: 24px;

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    height: 20px;
    width: 20px;
  }

  @media (max-width: ${p => p.theme.sizes.mobile}) {
    height: 20px;
    width: 20px;
  }
`;

const LayoutSwitch = () => {
  const setLayout = useStoreActions(actions => actions.layout.setLayout);
  const color = useStoreState(state => state.color.color);

  const switches = [
    { value: 'List', icon: ListIcon},
    { value: 'Grid', icon: GridIcon},
  ]

  return (
    <StyledLayoutSwitchesWrapper>
      {switches.map((btn,i) => {
        return <StyledButton  c={color} p={0} mr={3} mb={[3,4]} key={i} onClick={() => { setLayout(btn.value)}}>
          <StyledImg src={btn.icon}/>
          {/* {btn.value} */}
        </StyledButton>}
      )}
    </StyledLayoutSwitchesWrapper>
  );
};

export default LayoutSwitch;