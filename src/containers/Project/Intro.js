import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass/styled-components/';
import { useStoreState } from 'easy-peasy';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import Label from '~/components/Label';
import Button from '~/components/Button';

const StyledWrapper = styled.div`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  transform: ${props => positionFromState(props.state)};
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

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledWrapper state={state}>
          <StyledFlex maxWidth={[1200, 900]} pb={[3, 3, 3, 4]} pt={[4,5,5, 6]}>
            <StyledTitle
              pr={[4]}
              c={color}
              fontSize={[5, 6, 7]}
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
            <Box mt={[2, 2, 2]} mb={[3]} fontSize={[2]} width={[1, 1, 2 / 8]}>
              <Button
                href={url}
                px={3}
                py={2}
                c={color}
                fontSize={[2, 2, 2, 3]}
              >
                Launch now
              </Button>
            </Box>
            <Box pr={[3]} mb={[3]} fontSize={[2]} width={[1, 1, 2 / 8]}>
              <StyledLabelBold c={color}>Context</StyledLabelBold>
              <br />
              <StyledLabel c={color}>{client}</StyledLabel>
            </Box>
            <Box pr={[3]} mb={[3]} fontSize={[2]} width={[1, 1, 2 / 8]}>
              <StyledLabelBold c={color}>Year</StyledLabelBold>
              <br />
              <StyledLabel c={color}>{year}</StyledLabel>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}} pr={[3]} mb={[3]} fontSize={[2]} width={[1, 1, 2 / 8]}>
              <StyledLabelBold c={color}>Tasks</StyledLabelBold>
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
