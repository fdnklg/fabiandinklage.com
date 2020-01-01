import React from 'react';
import styled from 'styled-components';
import { Link } from 'rebass/styled-components';

const StyledButton = styled(Link)`
  cursor: pointer;
  width: fit-content;
  align-self: center;
  background: none;
  border: 1.5px solid ${p => p.c[0]};
  color: ${p => p.c[0]};
  border-radius: 6px;
  text-decoration: none;
  transition: all ${p => p.theme.times[0]} ease-in-out;

  &:hover {
    color: ${p => p.c[1]};
    background: ${p => p.c[0]};
    transition: all ${p => p.theme.times[0]} ease-in-out;
  }
`;

export default StyledButton;