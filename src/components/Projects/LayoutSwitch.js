import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Button } from 'rebass/styled-components';

import { content } from '~/data';
import IconGrid from '~/components/IconGrid';
import IconList from '~/components/IconList';

const StyledLayoutSwitchesWrapper = styled.div`
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: normal;
  display: flex;
  width: 100%;
`;

const StyledImg = styled.img`
  height: 24px;
  width: 24px;

  @media (max-width: ${(p) => p.theme.sizes.tablet}) {
    height: 20px;
    width: 20px;
  }

  @media (max-width: ${(p) => p.theme.sizes.mobile}) {
    height: 20px;
    width: 20px;
  }
`;

const LayoutSwitch = () => {
  const setLayout = useStoreActions((actions) => actions.layout.setLayout);
  const color = useStoreState((state) => state.color.color);
  const [active, setActive] = useState('Grid');
  const base = useStoreState(state => state.base);
  const layout = content[base].layout;

  const handleClick = (selected) => {
    setActive(selected);
    setLayout(selected);
  };

  const StyledButton = styled(Button)`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: 18px;
    align-items: center;
    height: auto;
    transition: all ${(p) => p.theme.times[0]} ease-in-out;
    color: ${(p) => p.c[0]};
    background: none;
    opacity: ${(p) => (p.activeNow === p.value ? 1 : 0.5)};
    &:focus {
      outline: 0;
    }
    &:hover {
      cursor: pointer;
      opacity: 1;
      transition: all ${(p) => p.theme.times[0]} ease-in-out;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  `;

  const switches = [
    { value: 'Grid', icon: <IconGrid />, label: 'grid' },
    { value: 'List', icon: <IconList />, label: 'list' },
  ];

  return (
    <StyledLayoutSwitchesWrapper>
      {switches.map((btn, i) => {
        return (
          <StyledButton
            activeNow={active}
            value={btn.value}
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
            {/* {layout[btn.label]} */}
          </StyledButton>
        );
      })}
    </StyledLayoutSwitchesWrapper>
  );
};

export default LayoutSwitch;
