import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Image, Box, Flex } from 'rebass/styled-components/';

import Intro from './Intro';
import Media from './Media';
import Paragraph from '~/components/Paragraph';

const StyledParagraph = styled(Paragraph)`
  text-align: left !important;
`;

const Project = ({match}) => {
  const projects = useStoreState(state => state.projects)
  const color = useStoreState(state => state.color.color)
  const project = projects.filter(p => p.path === match.params.projectName)[0];
  return (
    <>
      <Intro data={project}/>
      <Flex sx={{ margin: '0 auto' }} pb={[4,5,6]} maxWidth={[1200, 900]} fontSize={[3,4,5]}>
        <StyledParagraph content={project.description} color={color}/>
      </Flex>
      <Media data={project.media} />
    </>
  );
};

export default Project;
