import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';
import { Box } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';

const StyledParagraph = styled(ReactMarkdown)`
  color: ${p => p.c[0]};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${p => p.theme.letterSpacing[1]};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  max-width: 750px;

  opacity: ${props => {
    if (props.isPrerendering) {
      return 0;
    } else {
      return opacityFromState(props.state);
    }
  }};

  transform: ${props => {
    if (props.isPrerendering) {
      return 'translateY(10px)';
    } else {
      return positionFromState(props.state);
    }
  }};

  p {
    margin-bottom: 20px;

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
  const { content, color, timeout, paddingTop, paddingBottom } = p;
  const isPrerendering = useStoreState(state => state.layout.isPrerendering);

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => {
        return (
          <Box
            sx={{
              pt: paddingTop ? [4, 5, 5, 6] : 0,
              pb: paddingBottom ? [4, 5, 5, 6] : 0,
              m: 'auto',
            }}
          >
            <StyledParagraph
              isPrerendering={isPrerendering}
              state={state}
              c={color}
              source={content}
            />
          </Box>
        );
      }}
    </Transition>
  );
};

export default Paragraph;
