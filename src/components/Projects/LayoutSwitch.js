import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Flex, Button } from 'rebass/styled-components';
import GridIcon from '!file-loader!~/../public/images/grid.svg';
import ListIcon from '!file-loader!~/../public/images/list.svg';

import IconGrid from '~/components/IconGrid';
import IconList from '~/components/IconList';

const StyledLayoutSwitchesWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[2]};
  font-family: ${p => p.theme.fonts.headline};
  width: 100%;
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
  const [active, setActive] = useState('grid');

  const handleClick = selected => {
    setActive(selected);
    setLayout(selected);
  };

  const StyledButton = styled(Button)`
    cursor: pointer;
    transition: all ${p => p.theme.times[0]} ease-in-out;
    color: ${p => p.c[0]};
    width: 25px;
    background: none;
    opacity: ${p => (p.activeNow === active ? 1 : 0.1)};
    &:focus {
      outline: 0;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.5;
      transition: all ${p => p.theme.times[0]} ease-in-out;
    }
  `;

  const switches = [
    { value: 'Grid', icon: <IconGrid /> },
    { value: 'List', icon: <IconList /> },
  ];

  return (
    <StyledLayoutSwitchesWrapper>
      {switches.map((btn, i) => {
        return (
          <StyledButton
            activeNow={active}
            c={color}
            p={0}
            mr={3}
            mb={[3, 4]}
            key={`li-key-${i}`}
            onClick={() => {
              handleClick(btn.value);
            }}
          >
            {btn.icon}
          </StyledButton>
        );
      })}
    </StyledLayoutSwitchesWrapper>
  );
};

export default LayoutSwitch;
