import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

import Paragraph from '~/components/Paragraph';
import Projects from '~/components/Projects';

const Home = p => {
  const intro = useStoreState(actions => actions.about.intro);
  const color = useStoreState(state => state.color.color);
  return (
    <>
      <Paragraph color={color} content={intro} />
      <Projects />
    </>
  );
};

export default Home;
