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

const StyledList = styled(List)`
  text-align: center;
  color: ${p => p.c};
  margin: 0;

  li {
    font-size: ${p => p.theme.fontSizes[5]};
    color: ${p => p.c};

    @media (max-width: ${p => p.theme.sizes.tablet}) {
      font-size: ${p => p.theme.fontSizes[4]};
      text-align: left;
    }

    @media (max-width: ${p => p.theme.sizes.mobile}) {
      font-size: ${p => p.theme.fontSizes[3]};
      text-align: left;
    }
  }
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
        <StyledList c={color}>
          <li><StyledLink c={color} href="mailto:mail@fabiandinklage.com">mail(at)fabiandinklage.com</StyledLink></li>
          <li>Twitter: <StyledLink c={color} href="https://twitter.com/fdnklg">@fdnklg</StyledLink></li>
        </StyledList>
      </Flex>
    </Flex>
  );
};

export default Contact;
