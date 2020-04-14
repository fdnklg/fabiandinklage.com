import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Box } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import LayoutSwitch from './LayoutSwitch';
import Grid from './Grid';
import List from './List';
import Title from '../Title';

const StyledProjectsWrapper = styled(Box)`
  opacity: ${props => opacityFromState(props.state)};
  transform: ${props => positionFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  font-size: ${p => p.theme.fontSizes[1]};
`;

const Projects = p => {
  const { timeout } = p;
  const layout = useStoreState(actions => actions.layout.layout);
  const projects = useStoreState(action => action.projects);
  const color = useStoreState(state => state.color.color);

  const filtered = projects.filter(p => p.visible);

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledProjectsWrapper state={state} pb={[4, 5, 5, 6]}>
          <Title timeout={625} source='Selected Projects' color={color} />
          <LayoutSwitch c={color} />
          {layout == 'Grid' && <Grid data={filtered} />}
          {layout == 'List' && <List color={color} data={filtered} />}
        </StyledProjectsWrapper>
      )}
    </Transition>
  );
};

export default Projects;
