import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from '~/utils/animation';
import { content } from '~/data';

import Label from '~/components/Label';
import Link from '~/components/Link';
import RouterLink from '~/components/RouterLink';

const StyledBox = styled(Box)`
  font-family: ${p => p.theme.fonts.headline};
`;

const StyledFlex = styled(Flex)`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const Footer = p => {
  const { timeout } = p;
  const color = useStoreState(state => state.color.color);
  const base = useStoreState(state => state.base);
  const footer = content[base].footer;
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledFlex sx={{pb: ['3', '4', '5']}} state={state}>
          <StyledBox width={[1 / 3, 1 / 2]}>
            <Label content="©2020, F.D." />
          </StyledBox>
          <StyledBox sx={{ textAlign: 'right' }} width={[2 / 3, 1 / 2]}>
            <RouterLink color={color} to={`/legal/${base}`}>
              {footer.legal}
            </RouterLink>
            <Link
              mx={[3, 4, 4]}
              sx={{ textDecoration: 'none', color: color[0] }}
              variant="nav"
              href="https://photos.fabiandinklage.com"
            >
              {footer.photos}
            </Link>
            <Link
              // mr={[3, 4, 4]}
              sx={{ textDecoration: 'none', color: color[0] }}
              variant="nav"
              href="https://twitter.com/fdnklg"
            >
              {footer.twitter}
            </Link>
          </StyledBox>
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Footer;
