import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

const StyledSvg = styled.svg`
  svg {
    g {
      transition: all ${p => p.theme.times[0]} ease-in-out;
    }
  }
`;

const IconArrowLeft = () => {
  const color = useStoreState(state => state.color.color)[0];
  return (
    <StyledSvg width="15px" height="13px">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.05169 12.7415L0.266266 7.12415C-0.0887566 6.77944 -0.0887566 6.22056 0.266266 5.87585L6.05169 0.258529C6.40671 -0.0861778 6.98231 -0.0861778 7.33734 0.258529C7.69236 0.603236 7.69236 1.16212 7.33734 1.50682L3.10383 5.61732L14.0909 5.61732C14.593 5.61732 15 6.01251 15 6.5C15 6.98749 14.593 7.38268 14.0909 7.38268L3.10383 7.38268L7.33733 11.4932C7.69236 11.8379 7.69236 12.3968 7.33733 12.7415C6.98231 13.0862 6.40671 13.0862 6.05169 12.7415Z"
        fill={color}
      />
    </StyledSvg>
  );
};

export default IconArrowLeft;
