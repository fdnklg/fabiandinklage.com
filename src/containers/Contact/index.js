import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import Transition from "react-transition-group/Transition";
import { opacityFromState } from '~/utils/animation';

import Flex from '~/components/Flex';
import List from '~/components/List';
import Link from '~/components/Link';
import Paragraph from '~/components/Paragraph';

const StyledFlex = styled(Flex)`
  opacity: ${props => opacityFromState(props.state)};
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
  const contact = useStoreState(state => state.contact);
  const color = useStoreState(state => state.color.color);
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
          sx={{ textAlign: 'left', lineHeight: '1.5' }}
          pb={[4,5,5,6]}
          width={[1, 4/5, 4/5, 3/4]}
          fontSize={[3,4,4,4]}
        >
          <Flex sx={{ textAlign: ['left', 'left', 'center'] }} width={[1, 4/5, 4/5, 3/4]} fontSize={[3,4,4,5]}>
            <Paragraph content={contact} timeout={625} color={color}/>
            <br />
            <List c={color}>
              <li><StyledLink c={color} href="mailto:mail@fabiandinklage.com">mail(at)fabiandinklage.com</StyledLink></li>
              <li><StyledLink c={color} href="https://twitter.com/fdnklg">@fdnklg</StyledLink></li>
            </List>
          </Flex>
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Contact;
