import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Flex } from 'rebass/styled-components';

import Paragraph from '~/components/Paragraph';
import Projects from '~/components/Projects';


const StyledFlex = styled(Flex)`
  margin: 0 auto;
`;

const Home = p => {
  const intro = useStoreState(actions => actions.about.intro);
  const color = useStoreState(state => state.color.color);
  return (
    <>
      <StyledFlex sx={{ textAlign: ['left', 'left', 'center'] }} pt={[3,5,5,6]} pb={[0,2,2,4]} width={[1, 4/5, 4/5, 3/4]} fontSize={[3,4,4,5]}>
        <Paragraph color={color} content={intro} />
      </StyledFlex>
      <Projects />
    </>
  );
};

export default Home;
