import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components/';
import { useStoreState } from 'easy-peasy';

import Label from '~/components/Label';
import Button from '~/components/Button';

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  @media (max-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: column;
  }
`;

const StyledTitle = styled(Box)`
  font-family: ${p => p.theme.fonts.headline};
  line-height: 110%;
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
  const color = useStoreState(state => state.color.color);

  return (
    <>
      <StyledFlex maxWidth={[1200, 900]} pb={[3,3,3,4]}>
        <StyledTitle pr={[4]} fontSize={[5,6,7]} mb={[3]} width={[1, 1, 4/8]}>{title}</StyledTitle>
        <Box sx={{ lineHeight: '1.5' }} fontSize={[3,4]} width={[1, 1, 4/8]}>{subtitle}</Box>
      </StyledFlex>
      <StyledFlex sx={{ lineHeight: '1.5' }} pb={[4,5,5,6]} maxWidth={[1200, 900]}>
        <Box pr={[3]} mb={[3]} fontSize={[2]} width={[1, 1, 2/8]}><StyledLabelBold>Type</StyledLabelBold><br/><StyledLabel>{type}</StyledLabel></Box>
        <Box pr={[3]} mb={[3]} fontSize={[2]} width={[1, 1, 2/8]}><StyledLabelBold>Context</StyledLabelBold><br/><StyledLabel>{client}</StyledLabel></Box>
        <Box pr={[3]} mb={[3]} fontSize={[2]} width={[1, 1, 2/8]}><StyledLabelBold>Year</StyledLabelBold><br/><StyledLabel>{year}</StyledLabel></Box>
        <Box mt={[2,2,2]} mb={[3]} fontSize={[2]} width={[1, 1, 2/8]}><Button href={url} px={3} py={2} c={color} fontSize={[2,2,2,3]}>Launch project</Button></Box>
      </StyledFlex>
    </>
  );
};

export default Intro;
