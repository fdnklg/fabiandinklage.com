import React from 'react';
import styled from 'styled-components';
import { Link } from 'rebass/styled-components';

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  transition: opacity ${p => p.theme.times[0]} ease-in-out;

  &:hover {
    opacity: .5;
    transition: opacity ${p => p.theme.times[0]} ease-in-out;
  }
`;

export default StyledLink;