import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Flex } from 'rebass/styled-components';
import { content } from '~/data/';

import Paragraph from '~/components/Paragraph';
import Projects from '~/components/Projects';

const StyledFlex = styled(Flex)`
  margin: 0 auto;
`;

const Home = p => {
  const color = useStoreState(state => state.color.color);
  const base = useStoreState(state => state.base);
  const intro = content[base].about.intro;

  console.log('intro', intro, base)

  return (
    <>
      <StyledFlex
        sx={{ textAlign: ['left', 'center', 'center'] }}
        pb={[4, 5, 5, 6]}
        width={[1, 4 / 5, 4 / 5, 3 / 4]}
        fontSize={[3, 5, 5, 5]}
      >
        <Paragraph
          paddingTop={true}
          color={color}
          content={intro}
          timeout={400}
        />
      </StyledFlex>
      <Projects timeout={700} />
    </>
  );
};

export default Home;
