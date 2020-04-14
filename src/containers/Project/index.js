import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Image, Box, Flex } from 'rebass/styled-components/';
import { colorMode } from '~/utils';

import Intro from './Intro';
import Media from './Media';
import Paragraph from '~/components/Paragraph';

const StyledParagraph = styled(Paragraph)`
  text-align: left !important;
`;

const Project = ({ match }) => {
  const projects = useStoreState(state => state.projects);
  const project = projects.filter(p => p.path === match.params.projectName)[0];
  const setColor = useStoreActions(actions => actions.color.setColor);

  useEffect(() => {
    setColor(project.color)
  }, [project])

  return (
    <>
      <Intro color={project.color} timeout={1000} data={project} />
      <Flex
        sx={{ margin: '0 auto' }}
        pb={[4, 5, 6]}
        maxWidth={[1200, 900]}
        fontSize={[3, 4]}
      >
        <StyledParagraph
          timeout={1200}
          content={project.description}
          color={project.color}
        />
      </Flex>
      <Media data={project.media} />
    </>
  );
};

export default Project;
