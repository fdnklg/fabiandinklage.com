import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components/';

import Label from '~/components/Label';


const StyledFlex = styled(Flex)`
  margin: 0 auto;
  @media (max-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: column;
  }
`;

const StyledTitle = styled(Box)`
  font-family: ${p => p.theme.fonts.headline};
`;

const StyledLabel = styled.span`
  font-family: ${p => p.theme.fonts.body};
  letter-spacing: ${p => p.theme.letterSpacing[2]}
`;

const StyledLabelBold = styled.span`
  font-family: ${p => p.theme.fonts.headline};
  letter-spacing: ${p => p.theme.letterSpacing[2]}
`;

const Intro = props => {
  const { data } = props;
  const { title, subtitle, year, type, client, url } = data;

  return (
    <>
      <StyledFlex maxWidth={[1200, 900]} pt={[4,4,6]} pb={[2,3,5]}>
        <StyledTitle fontSize={[6,6,7]} mb={[3]} width={[1, 1, 2/3]}>{title}</StyledTitle>
        <Box sx={{ lineHeight: '1.5' }} fontSize={[3,4]} width={[1, 1, 1/3]}>{subtitle}</Box>
      </StyledFlex>
      <StyledFlex sx={{ lineHeight: '1.5' }} pb={[2,3,5]} maxWidth={[1200, 900]}>
        <Box mb={[3]} fontSize={[2]} width={[1/4, 1]}><StyledLabelBold>Year</StyledLabelBold><br/><StyledLabel>{year}</StyledLabel></Box>
        <Box mb={[3]} fontSize={[2]} width={[1/4, 1]}><StyledLabelBold>Type</StyledLabelBold><br/><StyledLabel>{type}</StyledLabel></Box>
        <Box mb={[3]} fontSize={[2]} width={[1/4, 1]}><StyledLabelBold>Client</StyledLabelBold><br/><StyledLabel>{client}</StyledLabel></Box>
        <Box mb={[3]} fontSize={[2]} width={[1/4, 1]}><StyledLabelBold>URL</StyledLabelBold><br/><StyledLabel>{url}</StyledLabel></Box>
      </StyledFlex>
    </>
  );
};

export default Intro;
