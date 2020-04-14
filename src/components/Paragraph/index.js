import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';
import { Box } from 'rebass/styled-components';

const StyledParagraph = styled(ReactMarkdown)`
  color: ${p => p.c[0]};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${p => p.theme.letterSpacing[1]};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  transform: ${props => positionFromState(props.state)};
  opacity: ${props => opacityFromState(props.state)};

  p {
    margin: 0;

    strong {
      font-family: 'Mier A Bold';
    }
  }


  a {
    text-decoration: none;
    border-bottom: 1px solid ${p => p.c[0]};
    color: ${p => p.c[0]};
    transition: all ${p => p.theme.times[1]} ease-in-out;

    &:hover {
      opacity: 0.5;
      transition: all ${p => p.theme.times[1]} ease-in-out;
    }
  }
`;

const Paragraph = p => {
  const { content, color, timeout, padding } = p;

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <Box
          sx={{
            pt: padding ? [4, 5, 5, 6] : 0
          }}
        >
          <StyledParagraph state={state} c={color} source={content} />
        </Box>
      )}
    </Transition>
  );
};

export default Paragraph;
