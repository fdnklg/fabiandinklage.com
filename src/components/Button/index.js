import React from 'react';
import styled from 'styled-components';
import { Link } from 'rebass/styled-components';

const StyledButton = styled(Link)`
  cursor: pointer;
  width: fit-content;
  align-self: center;
  padding-top: 7px;
  padding-bottom: 10px;
  background: none;
  font-size: ${(p) => p.theme.fontSizes[4]};
  border: 1px solid ${(p) => p.c[0]};
  color: ${(p) => p.c[0]};
  border-radius: 30px;
  text-decoration: none;
  transition: all ${(p) => p.theme.times[0]} ease-in-out;

  @media (max-width: ${(p) => p.theme.sizes.mobile}) {
    font-size: ${(p) => p.theme.fontSizes[3]};
  }

  &:hover {
    color: ${(p) => p.c[1]};
    background: ${(p) => p.c[0]};
    transition: all ${(p) => p.theme.times[0]} ease-in-out;
  }
`;

export default StyledButton;
