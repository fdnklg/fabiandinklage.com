import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';

const StyledSvg = styled.svg`
  width: 100%;
  svg {
    g {
      transition: all ${(p) => p.theme.times[0]} ease-in-out;
    }
  }
`;

const IconGrid = () => {
  const color = useStoreState((state) => state.color.color)[0];
  return (
    <StyledSvg width="20px" height="20px" viewBox="0 0 9 9">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="r" transform="translate(-68.000000, -315.000000)" fill={color}>
          <g id="Group" transform="translate(68.000000, 315.000000)">
            <rect id="Rectangle" x="0" y="0" width="3" height="3"></rect>
            <rect id="Rectangle-Copy-2" x="0" y="6" width="3" height="3"></rect>
            <rect id="Rectangle-Copy" x="6" y="0" width="3" height="3"></rect>
            <rect id="Rectangle-Copy-3" x="6" y="6" width="3" height="3"></rect>
          </g>
        </g>
      </g>
    </StyledSvg>
  );
};

export default IconGrid;
