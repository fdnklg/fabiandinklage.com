import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Image, Box, Flex } from 'rebass/styled-components/';

import Intro from './Intro';
import Media from './Media';
import Paragraph from '~/components/Paragraph';
import { content } from '~/data';

const StyledParagraph = styled(Paragraph)`
  text-align: left !important;
`;

const Project = ({ match }) => {
  const base = useStoreState((state) => state.base);
  const projects = content[base].projects;
  const project = projects.filter(
    (p) => p.path === match.params.projectName
  )[0];
  const setColor = useStoreActions((actions) => actions.color.setColor);

  useEffect(() => {
    setColor(project.color);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, [project]);

  return (
    <>
      <Intro color={project.color} timeout={600} data={project} />
      <Flex
        sx={{ margin: '0 auto' }}
        pb={[4, 5, 6]}
        maxWidth={[1200, 900]}
        fontSize={[3, 4]}
      >
        <StyledParagraph
          timeout={800}
          content={project.description}
          color={project.color}
        />
      </Flex>
      <Media timeout={1000} data={project.media} />
    </>
  );
};

export default Project;
