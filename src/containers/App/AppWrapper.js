import React, { useEffect } from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { colorMode } from '~/utils';

import { withRouter, Route, Switch } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${p => p.c[1]};
  color: ${p => p.c[0]};
  transition: all 0.25s ease-in-out;
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
  let color = useStoreState(state => state.color.color);

  const DynamicGlobalStyle = createGlobalStyle`
    ::selection {
      background-color: ${color[0]};
      color: ${color[1]};
    }

    html {
      background: ${color[1]};
    }
  `;

  return (
    <StyledWrapper c={color}>
      <DynamicGlobalStyle />
      <Box
        sx={{
          mx: 'auto',
          px: [3, 4, 5, 6],
          py: [3, 4, 5, 5],
        }}
      >
        <Nav timeout={500} />
        <Switch>
          <Route
            exact
            path="/contact"
            component={() => <Contact timeout={700} />}
          />
          <Route
            exact
            path="/profile"
            component={() => <Profile timeout={700} />}
          />
          <Route
            exact
            path="/legal"
            component={() => <Legal timeout={700} />}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects/:projectName" component={Project} />
        </Switch>
        <Cta timeout={900} content={cta} />
        <Footer timeout={1100} />
      </Box>
    </StyledWrapper>
  );
};

export default withRouter(AppWrapper);
