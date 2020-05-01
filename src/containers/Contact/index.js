import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import Flex from '~/components/Flex';
import Form from '~/components/Form';
import Link from '~/components/Link';
import Paragraph from '~/components/Paragraph';
import { content } from '~/data/'

const StyledFlex = styled(Flex)`
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
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid ${p => p.c[0]};
  color: ${p => p.c[0]};
  letter-spacing: ${p => p.theme.letterSpacing[2]};
`;

const Contact = p => {
  const { timeout } = p;
  const base = useStoreState(state => state.base);
  const contact = content[base].contact;
  const color = useStoreState(state => state.color.color);
  const isPrerendering = useStoreState(state => state.layout.isPrerendering);
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledFlex
          state={state}
          isPrerendering={isPrerendering}
          sx={{ textAlign: 'left', lineHeight: '1.5', flexGrow: '1', display: 'flex', pt: ['32px', '0px', '0px'], justifyContent: ['flex-start', 'center', 'center'] }}
          width={[1, 4 / 5, 4 / 5, 3 / 4]}
          fontSize={[3, 4, 4, 4]}
        >
          <Flex
            sx={{ textAlign: ['left', 'left', 'center'] }}
            width={[1, 4 / 5, 4 / 5, 3 / 4]}
            fontSize={[3, 4, 4, 5]}
          >
            <Paragraph paddingBottom={true} padding={false} content={contact} timeout={timeout + 200} color={color} />

            <Form />
          </Flex>
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Contact;
