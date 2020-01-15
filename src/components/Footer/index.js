import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';
import Transition from "react-transition-group/Transition";
import { opacityFromState } from '~/utils/animation';

import Label from '~/components/Label';
import Link from '~/components/Link';

const StyledBox = styled(Box)`
  font-family: ${p => p.theme.fonts.headline};
`;

const StyledFlex = styled(Flex)`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const Footer = p => {
  const { content, timeout } = p;
  const color = useStoreState(state => state.color.color);
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      { state => (
        <StyledFlex state={state}>
          <StyledBox
            width={1/2}
          >
            <Label content="©2020, Fabian Dinklage"/>
          </StyledBox>
          <StyledBox 
            sx={{ textAlign: 'end' }} 
            width={1/2}
          >
            <Link mr={[3,4,4]} sx={{ textDecoration: 'none', color: color[0] }} variant="nav" href="/legal">
              Legal Note
            </Link>
          </StyledBox>
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Footer;
