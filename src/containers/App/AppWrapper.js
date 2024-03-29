import React, { useEffect } from 'react';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Helmet } from 'react-helmet';
import { piwik } from '../../utils/';
import { content } from '~/data';

import { withRouter, Route, Switch } from 'react-router-dom';
const baseLang = '(en|de)';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${p => p.c[0]};
  transition: all 0.25s ease-in-out;
`;

const InnerWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  max-width: 1200px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    min-height: calc(100vh - 50px);
  }

  @media screen and (max-width: ${p => p.theme.sizes.mobile}) {
    min-height: calc(100vh - 15px);
  }
`;

import Disclaimer from '~/components/Disclaimer';
import Nav from '../../components/Nav';
import Profile from '../Profile';
import Project from '../Project';
import Legal from '../Legal';
import Services from '../../components/Services';
import Clients from '../../components/Clients';
import Cta from '../../components/Cta';
import Home from '../Home';
import Footer from '../../components/Footer';
import Contact from '../Contact';

const AppWrapper = () => {
  let color = useStoreState(state => state.color.color);
  let setIsPrerendering = useStoreActions(
    actions => actions.layout.setIsPrerendering
  );

  const base = useStoreState(state => state.base);

  const isPrerendering = () => {
    return navigator.userAgent == 'ReactSnap';
  };

  useEffect(() => {
    var _paq = [];
    _paq.push(['setCookieDomain', '*.fabiandinklage.com']);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    piwik(_paq);
    window._paq = _paq;

    setIsPrerendering(isPrerendering());
  }, []);

  const DynamicGlobalStyle = createGlobalStyle`
    ::selection {
      background-color: ${color[0]};
      color: ${color[1]};
    }

    html {
      background: ${color[1]};
      transition: all .125s ease-in-out;
    }
  `;

  return (
    <StyledWrapper c={color}>
      {base === 'en' && (
        <Helmet>
          <title>Fabian Dinklage – Data Visualization & Interface Design</title>
          <meta
            name="viewport"
            content="initial-scale=1, maximum-scale=1, width=device-width"
          />
          <meta
            name="description"
            content="Fabian Dinklage is a freelance data visualization and interaction designer based in Berlin."
          />
          <meta
            lang="en"
            name="keywords"
            content="Fabian Dinklage, data visualization, information visualization, visualization, datavis, data vis, data viz, interaction design, interface design, information graphics, data mining, data science, information aesthetics, information design, Berlin,  information architecture"
          />
          <meta
            lang="de"
            name="keywords"
            content="Fabian Dinklage, datenvisualisierung, informationsvisualisierung, datavis, interface design, informationsdesign, informationsarchitektur, datenjournalismus, infografik, Berlin"
          />
          <meta http-equiv="content-language" content="en" />

          <meta name="twitter:card" content="summary"></meta>
          <meta
            name="twitter:title"
            content="Fabian Dinklage – Data Visualization & Interaction Design"
          ></meta>
          <meta
            name="twitter:description"
            content="Fabian Dinklage is a freelance data visualization and interaction designer based in Berlin."
          />
        </Helmet>
      )}
      {base === 'de' && (
        <Helmet>
          <title>Fabian Dinklage – Datenvisualisierung & Interfacedesign</title>
          <meta
            name="viewport"
            content="initial-scale=1, maximum-scale=1, width=device-width"
          />
          <meta
            name="description"
            content="Fabian Dinklage ist freiberuflicher Informationsdesigner mit Fokus auf Datenvisualisierung aus Berlin."
          />
          <meta
            lang="de"
            name="keywords"
            content="Fabian Dinklage, datenvisualisierung, informationsvisualisierung, datavis, interface design, informationsdesign, informationsarchitektur, datenjournalismus, infografik, Berlin, Deutschland"
          />
          <meta http-equiv="content-language" content="en" />

          <meta name="twitter:card" content="summary"></meta>
          <meta
            name="twitter:title"
            content="Fabian Dinklage – Datenvisualisierung & Interfacedesign"
          ></meta>
          <meta
            name="twitter:description"
            content="Fabian Dinklage ist freiberuflicher Informationsdesigner mit Fokus auf Datenvisualisierung aus Berlin."
          />
        </Helmet>
      )}
      <DynamicGlobalStyle />
      <Box
        sx={{
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          px: [3, 4, 5, 6],
          pt: [6, 6, 6, 6],
          pb: [0, 3, 3, 3],
        }}
      >
        <InnerWrapper>
          <Disclaimer timeout={100} />
          <Nav timeout={100} />
          <Route
            exact
            path={`/contact/${baseLang}`}
            render={() => <Contact timeout={400} />}
          />
          <Route
            exact
            path={`/profile/${baseLang}`}
            render={() => <Profile timeout={400} />}
          />
          <Route
            exact
            path={`/legal/${baseLang}`}
            render={() => <Legal timeout={400} />}
          />
          <Route exact path={`/home/${baseLang}`} component={Home} />
          <Route
            exact
            path={`/projects/:projectName/${baseLang}/`}
            component={Project}
          />
          <Route
            exact
            path={`/home/${baseLang}/`}
            render={() => <Services timeout={900} />}
          />
          <Route
            exact
            path={`/home/${baseLang}/`}
            render={() => <Clients timeout={900} />}
          />
          <Route
            exact
            path={`/home/${baseLang}/`}
            render={() => <Cta timeout={1000} />}
          />
          <Footer timeout={1200} />
        </InnerWrapper>
      </Box>
    </StyledWrapper>
  );
};

export default withRouter(AppWrapper);
