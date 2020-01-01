import React from 'react';
import { Box } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';
import styled from 'styled-components';

import { withRouter, Route, Switch } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${p => p.c[1]};
  color: ${p => p.c[0]};
`;

import Nav from '../../components/Nav';
import Profile from '../Profile';
import Project from '../Project';
import Legal from '../Legal';
import Cta from '../../components/Cta';
import Home from '../Home';
import Footer from '../../components/Footer';
import Contact from '../Contact';

const AppWrapper = () => {
  const cta = useStoreState(state => state.cta);
  const color = useStoreState(state => state.color.color);
  return (
    <StyledWrapper c={color}>
      <Box
        sx={{
          mx: 'auto',
          px: [3, 4, 5, 6],
          py: [3, 4, 5, 5],
        }}
      >
        <Nav />
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/" component={Home} />
          <Route exact path={`/projects/:projectName`} component={Project} />
        </Switch>
        <Cta content={cta}/>
        <Footer />

      </Box>
    </StyledWrapper>
  );
};

export default withRouter(AppWrapper);
