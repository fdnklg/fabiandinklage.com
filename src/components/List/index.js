import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 0;
  text-align: center;
  line-height: 150%;
  color: ${p => p.c};
  margin: 0;

  li {
    ${'' /* font-size: ${p => p.theme.fontSizes[5]}; */}
    color: ${p => p.c};

    @media (max-width: ${p => p.theme.sizes.tablet}) {
      ${'' /* font-size: ${p => p.theme.fontSizes[4]}; */}
      text-align: left;
    }

    @media (max-width: ${p => p.theme.sizes.mobile}) {
      ${'' /* font-size: ${p => p.theme.fontSizes[3]}; */}
      text-align: left;
    }
  }
`;

export default StyledUl;