import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Image, Box } from 'rebass/styled-components/';

import Intro from './Intro';
import Media from './Media';

const Project = ({match}) => {
  const projects = useStoreState(state => state.projects)
  const project = projects.filter(p => p.path === match.params.projectName)[0];
  return (
    <>
      <Intro data={project}/>
      <Media data={project.media} />
    </>
  );
};

export default Project;
