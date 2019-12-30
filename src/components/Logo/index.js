import React from 'react';
import styled from 'styled-components';
import LogoSrc from '!file-loader!~/../public/images/avatar.svg';
import { Image } from 'rebass/styled-components';

const StyledLogo = styled(Image)`
  g#avatar {
    fill: blue !important;
  }
`;

const Logo = () => {
  return (
    <StyledLogo
      src={LogoSrc}
      mr={3}
      sx={{
        width: [ '35px' ]
      }}
    />
  )
}

export default Logo;