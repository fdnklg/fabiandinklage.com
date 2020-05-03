import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components/';
import { useStoreState } from 'easy-peasy';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import Label from '~/components/Label';
import Button from '~/components/Button';
import { content } from '~/data';

const StyledWrapper = styled.div`
  transition: all ${p => p.theme.times[1]} ease-in-out;

    opacity: ${props => {
    if (props.isPrerendering) {
      return 0
    } else {
      return opacityFromState(props.state)
    }
  }};

  transform: ${props => {
    if (props.isPrerendering) {
      return 'translateY(10px)'
    } else {
      return positionFromState(props.state)
    }
  }};
`;

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  @media (max-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: column;
  }
`;

const StyledBox = styled(Flex)`
  color: ${p => p.c[0]};
`;

const StyledTitle = styled(Box)`
  font-family: ${p => p.theme.fonts.headline};
  line-height: 110%;
  color: ${p => p.c[0]};

`;

const StyledLabel = styled.span`
  font-family: ${p => p.theme.fonts.body};
  letter-spacing: ${p => p.theme.letterSpacing[2]};
  color: ${p => p.c[0]};
`;

const SpacedStyledLabel = styled(StyledLabel)`
  ${'' /* padding-bottom: 8px; */}
`;

const StyledLabelBold = styled.span`
  font-family: ${p => p.theme.fonts.headline};
  letter-spacing: ${p => p.theme.letterSpacing[2]};
  color: ${p => p.c[0]};
`;

const Intro = props => {
  const { data, timeout, color } = props;
  const { title, subtitle, year, tasks, client, url } = data;
  const isPrerendering = useStoreState(state => state.layout.isPrerendering);
  const base = useStoreState(state => state.base);
  const others = content[base].others;

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledWrapper state={state} isPrerendering={isPrerendering}>
          <StyledFlex maxWidth={[1200, 900]} pb={[3, 3, 3, 4]} pt={[4,5,5, 6]}>
            <StyledTitle
              pr={[4]}
              c={color}
              fontSize={[6, 6, 7]}
              mb={[3]}
              width={[1, 1, 4 / 8]}
            >
              {title}
            </StyledTitle>
            <StyledBox
              sx={{ lineHeight: '1.5', letterSpacing: '.5px' }}
              fontSize={[3, 4]}
              c={color}
              width={[1, 1, 4 / 8]}
            >
              {subtitle}
            </StyledBox>
          </StyledFlex>
          <StyledFlex
            sx={{ lineHeight: '1.5' }}
            pb={[4, 5, 5, 5]}
            maxWidth={[1200, 900]}
          >
            <Box mt={[2, 2, 2]} mb={[4,4,5,5]} fontSize={[2]} width={[1, 1, 2 / 8]}>
              <Button
                href={url}
                px={3}
                py={2}
                c={color}
                fontSize={[2, 2, 2, 3]}
              >
                {others.launch}
              </Button>
            </Box>
            <Box pr={[3]} mb={[3]} fontSize={[2,3,3]} width={[1, 1, 2 / 8]}>
              <StyledLabelBold c={color}>{others.context}</StyledLabelBold>
              <br />
              <StyledLabel c={color}>{client}</StyledLabel>
            </Box>
            <Box pr={[3]} mb={[3]} fontSize={[2,3,3]} width={[1, 1, 2 / 8]}>
              <StyledLabelBold c={color}>{others.year}</StyledLabelBold>
              <br />
              <StyledLabel c={color}>{year}</StyledLabel>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}} pr={[3]} mb={[3]} fontSize={[2]} width={[1, 1, 2 / 8]}>
              <StyledLabelBold c={color}>{others.tasks}</StyledLabelBold>
              {tasks.map(t => (
                <><SpacedStyledLabel c={color}>{t}</SpacedStyledLabel></>
              ))}
            </Box>
          </StyledFlex>
        </StyledWrapper>
      )}
    </Transition>
  );
};

export default Intro;
