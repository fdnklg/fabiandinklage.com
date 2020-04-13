import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';

const StyledSvg = styled.svg`
  width: 100%;
`;

const IconList = () => {
  const color = useStoreState(state => state.color.color)[0];
  return (
    <svg width="20px" height="20px" viewBox="0 0 10 9">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="r" transform="translate(-48.000000, -315.000000)" fill={color}>
          <g id="Group-2" transform="translate(48.000000, 315.000000)">
            <rect id="Rectangle" x="0" y="0" width="10" height="1"></rect>
            <rect
              id="Rectangle-Copy-4"
              x="0"
              y="4"
              width="10"
              height="1"
            ></rect>
            <rect
              id="Rectangle-Copy-5"
              x="0"
              y="8"
              width="10"
              height="1"
            ></rect>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconList;
