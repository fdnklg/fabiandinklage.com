import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

import Flex from '~/components/Flex';
import List from '~/components/List';
import Link from '~/components/Link';
import Paragraph from '~/components/Paragraph';



const Contact = p => {
  const about = useStoreState(state => state.about);
  const color = useStoreState(state => state.color.color);
  const { intro, profileUrl } = about;
  return (
    <Flex 
      sx={{ textAlign: 'left', lineHeight: '1.5' }} 
      pt={[3,5,5,6]} 
      pb={[0,2,2,4]} 
      width={[1, 4/5, 4/5, 3/4]} 
      fontSize={[3,4,4,4]}
    >
      <Flex sx={{ textAlign: ['left', 'left', 'center'] }} pb={[0,2,2,4]} width={[1, 4/5, 4/5, 3/4]} fontSize={[3,4,4,5]}>
        <Paragraph content={intro} color={color}/>
      </Flex>
      <List sx={{textAlign: 'center !important'}}>
        <li>Fabian Dinklage</li>
        <li>Twitter: <Link href="https://twitter.com/fdnklg">@fdnklg</Link></li>
        <li>Mail: <Link href="mailto:mail@fabiandinklage.com">mail(at)fabiandinklage.com</Link></li>
      </List>
    </Flex>
  );
};

export default Contact;
