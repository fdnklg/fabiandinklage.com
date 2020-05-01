import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Box } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import { content } from '~/data/';

import LayoutSwitch from './LayoutSwitch';
import Grid from './Grid';
import List from './List';
import Title from '../Title';

const StyledProjectsWrapper = styled(Box)`
  opacity: ${props => {
    if (props.isPrerendering) {
      return 0
    } else {
      return opacityFromState(props.state)
    }
  }};

  transform: ${props => {
    if (props.isPrerendering) {
      return 'translateY(10px)'
    } else {
      return positionFromState(props.state)
    }
  }};

  transition: all ${p => p.theme.times[1]} ease-in-out;
  font-size: ${p => p.theme.fontSizes[1]};
`;

const Projects = p => {
  const { timeout } = p;
  const layout = useStoreState(actions => actions.layout.layout);
  const color = useStoreState(state => state.color.color);
  const isPrerendering = useStoreState(state => state.layout.isPrerendering);

  const base = useStoreState(state => state.base);
  const projects = content[base].projects;
  const title = content[base].title.projects;

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
        <StyledProjectsWrapper isPrerendering={isPrerendering} state={state} pb={[4, 5, 5, 6]}>
          <Title timeout={625} source={title} color={color} />
          <LayoutSwitch c={color} />
          {layout == 'Grid' && <Grid data={filtered} />}
          {layout == 'List' && <List color={color} data={filtered} />}
        </StyledProjectsWrapper>
      )}
    </Transition>
  );
};

export default Projects;
