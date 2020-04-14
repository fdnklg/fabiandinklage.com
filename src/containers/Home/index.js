import React, { useState, useEffect } from 'react';
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
      <StyledFlex
        sx={{ textAlign: ['left', 'center', 'center'] }}
        pb={[4, 5, 5, 6]}
        width={[1, 4 / 5, 4 / 5, 3 / 4]}
        fontSize={[3, 5, 5, 6]}
      >
        <Paragraph padding="true" color={color} content={intro} timeout={800} />
      </StyledFlex>
      <Projects timeout={1000} />
    </>
  );
};

export default Home;
