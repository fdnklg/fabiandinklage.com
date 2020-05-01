import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const StyledRouterLink = styled(Link)`
  cursor: pointer;
  letter-spacing: .5px;
  text-decoration: none;
  color: ${p => p.color};
  transition: opacity ${p => p.theme.times[0]} ease-in-out;
  opacity: ${p => p.disabled ? .5 : 1}

  &:hover {
    opacity: 0.5;
    transition: opacity ${p => p.theme.times[0]} ease-in-out;
  }
`;

const RouterLink = p => {
  const { to, label, color, disabled, children } = p;
  console.log(disabled, 'disabled')
  return (
    <StyledRouterLink disabled={disabled} color={color[0]} to={to}>{children}</StyledRouterLink>
  )
}

export default RouterLink;