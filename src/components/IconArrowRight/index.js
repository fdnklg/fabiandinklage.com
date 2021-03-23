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

const IconArrowRight = () => {
  const color = useStoreState(state => state.color.color)[0];
  return (
    <StyledSvg width="15px" height="13px">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.94831 0.25853L14.7337 5.87585C15.0888 6.22056 15.0888 6.77944 14.7337 7.12415L8.94831 12.7415C8.59329 13.0862 8.01769 13.0862 7.66267 12.7415C7.30764 12.3968 7.30764 11.8379 7.66267 11.4932L11.8962 7.38268H0.909091C0.407014 7.38268 0 6.98749 0 6.5C0 6.01251 0.407014 5.61732 0.909091 5.61732H11.8962L7.66267 1.50682C7.30764 1.16212 7.30764 0.603237 7.66267 0.25853C8.01769 -0.0861767 8.59329 -0.0861767 8.94831 0.25853Z"
        fill={color}
      />
    </StyledSvg>
  );
};

export default IconArrowRight;
