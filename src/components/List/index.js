import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 0;
  line-height: 150%;
  color: ${p => p.c};

  li {
    color: ${p => p.c};

    @media (max-width: ${p => p.theme.sizes.tablet}) {
      text-align: left;
    }

    @media (max-width: ${p => p.theme.sizes.mobile}) {
      text-align: left;
    }
  }
`;

export default StyledUl;
