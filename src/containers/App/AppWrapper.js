import React, { useEffect } from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { colorMode } from '~/utils';
import {Helmet} from 'react-helmet';

import { withRouter, Route, Switch } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${p => p.c[0]};
  transition: all 0.25s ease-in-out;
`;

import Nav from '../../components/Nav';
import Profile from '../Profile';
import Project from '../Project';
import Legal from '../Legal';
import Services from '../../components/Services';
import Cta from '../../components/Cta';
import Home from '../Home';
import Footer from '../../components/Footer';
import Contact from '../Contact';

const AppWrapper = () => {
  const cta = useStoreState(state => state.cta);
  const services = useStoreState(state => state.services);
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
      <Helmet>
        <title>Fabian Dinklage – Data Visualization & Interaction Design</title>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, width=device-width" />
        <meta name="description" content="Fabian Dinklage is a freelance data visualization and interaction designer based in Berlin."/>
        <meta lang="en" name="keywords" content="Fabian Dinklage, data visualization, information visualization, visualization, datavis, data vis, data viz, interaction design, interface design, information graphics, data mining, data science, information aesthetics, information design, Berlin,  information architecture" />
        <meta lang="de" name="keywords" content="Fabian Dinklage, datenvisualisierung, informationsvisualisierung, datavis, interface design, informationsdesign, informationsarchitektur, datenjournalismus, infografik" />
        <meta http-equiv="content-language" content="en" />

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content="Fabian Dinklage – Data Visualization & Interaction Design"></meta>
        <meta name="twitter:description" content="Fabian Dinklage is a freelance data visualization and interaction designer based in Berlin." />

      </Helmet>
      <DynamicGlobalStyle />
      <Box
        sx={{
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          px: [3, 4, 5, 6],
          pt: [3, 4, 5, 5],
          pb: [0],
        }}
      > 
        <>
        <Nav timeout={400} />
        <Switch>
          <Route
            exact
            path="/contact"
            render={() => <Contact timeout={800} />}
          />
          <Route
            exact
            path="/profile"
            render={() => <Profile timeout={800} />}
          />
          <Route
            exact
            path="/legal"
            render={() => <Legal timeout={800} />}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects/:projectName" component={Project} />
        </Switch>
        <Route exact path="/" render={() => <Services content={services} timeout={800} />} />
        <Route exact path="/" render={() => <Cta timeout={800} content={cta} />} />
        </>
        <Footer timeout={1000} />
      </Box>
    </StyledWrapper>
  );
};

export default withRouter(AppWrapper);
