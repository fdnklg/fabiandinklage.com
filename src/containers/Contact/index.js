import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

import Flex from '~/components/Flex';
import List from '~/components/List';
import Link from '~/components/Link';
import Paragraph from '~/components/Paragraph';

const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid ${p => p.c[0]};
  color: ${p => p.c[0]};
`;

const Contact = p => {
  const contact = useStoreState(state => state.contact);
  const color = useStoreState(state => state.color.color);
  return (
    <Flex
      sx={{ textAlign: 'left', lineHeight: '1.5' }}
      pb={[4,5,5,6]}
      width={[1, 4/5, 4/5, 3/4]}
      fontSize={[3,4,4,4]}
    >
      <Flex sx={{ textAlign: ['left', 'left', 'center'] }} width={[1, 4/5, 4/5, 3/4]} fontSize={[3,4,4,5]}>
        <Paragraph content={contact} color={color}/>
        <br />
        <List c={color}>
          <li><StyledLink c={color} href="mailto:mail@fabiandinklage.com">mail(at)fabiandinklage.com</StyledLink></li>
          <li><StyledLink c={color} href="https://twitter.com/fdnklg">@fdnklg</StyledLink></li>
        </List>
      </Flex>
    </Flex>
  );
};

export default Contact;
