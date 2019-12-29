import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Box } from 'rebass/styled-components';

import LayoutSwitch from './LayoutSwitch';
import Grid from './Grid';
import List from './List';

const StyledProjectsWrapper = styled(Box)`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const Projects = (props) => {
  const layout = useStoreState(actions => actions.layout.layout)
  const projects = useStoreState(action => action.projects)
  const color = useStoreState(state => state.color.color);

  return (
    <StyledProjectsWrapper py={5}>
      <LayoutSwitch />
      { layout == "Grid" && <Grid data={projects}/> }
      { layout == "List" && <List color={color} data={projects}/> }
    </StyledProjectsWrapper>
  );
};

export default Projects;