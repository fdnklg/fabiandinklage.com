import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components/';

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  @media (max-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: column;
  }
`;

const Intro = props => {
  const { data } = props;
  const { title, subtitle, year, type, client, url } = data;

  return (
    <>
      <StyledFlex maxWidth={[1200, 900]} pt={[2,4,6]} pb={[2,3,5]}>
        <Box fontSize={[4,5,7]} width={2/3}>{title}</Box>
        <Box fontSize={[2,3,4]} width={1/3}>{subtitle}</Box>
      </StyledFlex>
      <StyledFlex pb={[2,3,6]} maxWidth={[1200, 900]}>
        <Box fontSize={[1,2]} width={[1/4, 1]}><b>Year</b><br/>{year}</Box>
        <Box fontSize={[1,2]} width={[1/4, 1]}><b>Type</b><br/>{type}</Box>
        <Box fontSize={[1,2]} width={[1/4, 1]}><b>Client</b><br/>{client}</Box>
        <Box fontSize={[1,2]} width={[1/4, 1]}><b>URL</b><br/>{url}</Box>
      </StyledFlex>
    </>
  );
};

export default Intro;
