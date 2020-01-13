import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import Transition from "react-transition-group/Transition";
import { opacityFromState } from '~/utils/animation'

const StyledParagraph = styled(ReactMarkdown)`
  color: ${p => p.c[0]};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${ p => p.theme.letterSpacing[1] };
  transition: all ${p => p.theme.times[1]} ease-in-out;
  opacity: ${props => opacityFromState(props.state)};
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    border-bottom: 1px solid ${p => p.c[0]};
    color: ${p => p.c[0]};
    transition: opacity ${p => p.theme.times[0]} ease-in-out;

    &:hover {
      opacity: .5;
      transition: opacity ${p => p.theme.times[0]} ease-in-out;
    }
  }
`;

const Paragraph = p => {

  const { content, color, timeout } = p;

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (<StyledParagraph state={state} c={color} source={content} />)}
    </Transition>
  );
};

export default Paragraph;
