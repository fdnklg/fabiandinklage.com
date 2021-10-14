import React from 'react';
import styled from 'styled-components';
import { Link } from 'rebass/styled-components';

// border: 1px solid ${p => p.c[0]};

const StyledButton = styled(Link)`
  cursor: pointer;
  width: fit-content;
  align-self: center;
  padding-top: 7px;
  padding-bottom: 10px;
  background: ${p => p.c[0]};
  font-size: ${p => p.theme.fontSizes[4]};
  color: ${p => p.c[1]};
  border-radius: 30px;
  text-decoration: none;
  transition: all ${p => p.theme.times[0]} ease-in-out;

  svg {
    path {
      fill: ${p => p.c[2]};
    }
  }

  &:hover {
    color: ${p => p.c[1]};
    background: ${p => p.c[0]};
    transition: all ${p => p.theme.times[0]} ease-in-out;
    opacity: .66;

    svg {
      path {
        fill: ${p => p.c[2]};
      }
    }
  }
`;

export default StyledButton;
