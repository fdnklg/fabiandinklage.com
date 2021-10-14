import React from 'react';
import styled from 'styled-components';
import { Text, Box, Flex } from 'rebass/styled-components';
import { opacityFromState, positionFromState } from '~/utils/animation';
import Transition from 'react-transition-group/Transition';
import { useStoreState } from 'easy-peasy';

import DBLogo from '../../logos/db.svg';
import BmbfLogo from '../../logos/bmbf.svg';
import GniLogo from '../../logos/gni.svg';
import OkfLogo from '../../logos/okf.svg';
import ZonLogo from '../../logos/zon.svg';
import FraunhoferLogo from '../../logos/fraunhofer.svg';

import Title from '../Title/';

function getSVG(id, width, height) {
  switch (id) {
    case 'db':
      return <DBLogo/>
      break;
    case 'bmbf':
      return <BmbfLogo/>
      break;
    case 'gni':
      return <GniLogo/>
      break;
    case 'okf':
      return <OkfLogo/>
      break;
    case 'zon':
      return <ZonLogo/>
      break;
    case 'fraunhofer':
      return <FraunhoferLogo/>
      break;
    default:
      break;
  }
}

import { content } from '~/data';

const SVGWrapper = styled.div`
  width: ${p => p.width};
  svg {
    display: absolute;
  }
`;

const StyledTile = styled.div`
  height: 120px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${p => p?.c[2]};
  border-radius: 8px;
  margin-bottom: 5px;

  @media (min-width: ${p => p.theme.sizes.mobile}) {
    height: 150px;
  }

  @media (min-width: ${p => p.theme.sizes.tablet}) {
    margin-bottom: 10px;
    height: 170px;
  }
`

const StyledWrapper = styled.div`
  border: none;
  margin-top: 10px;
  text-align: center;
  width: calc(100%) !important;
  
  @media (min-width: ${p => p.theme.sizes.mobile}) {
    margin-top: 20px;
    width: calc(50% - 10px) !important;
  }
  
  @media (min-width: ${p => p.theme.sizes.tablet}) {
    margin-top: 20px;
    width: calc(33% - 10px) !important;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  text-align: center;
  margin: 0 auto;
  color: ${p => p?.c[0]};
  // font-family: Mier A Bold,sans-serif;
  letter-spacing: .75px;
  font-size: 12px;
  display: block;
  opacity: .66;
  max-width: 70%;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`

const StyledBox = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0 !important;
  flex-direction: row;
  flex-wrap: wrap;
  opacity: ${props => {
    if (props.isPrerendering) {
      return 0;
    } else {
      return opacityFromState(props.state);
    }
  }};

  transform: ${props => {
    if (props.isPrerendering) {
      return 'translateY(10px)';
    } else {
      return positionFromState(props.state);
    }
  }};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  color: ${p => p.c[0]};
  background: lighten("${p => p.c[1]}", 5);
  justify-content: space-between;
`;

function Clients({timeout}) {

  const color = useStoreState(state => state.color.color);
  const isPrerendering = useStoreState(state => state.layout.isPrerendering);
  const base = useStoreState(state => state.base);

  const clients = content.global.clients;

  const title = content[base].title.clients;
  const subtitle = content[base].title.clientsSubtitle;

  if (clients) {
    return (
      <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <>
        <Title timeout={timeout} source={title} subtitle={subtitle} color={color} />
        <StyledBox
          c={color}
          state={state}
          isPrerendering={isPrerendering}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            mb: [4, 5, 6],
            px: ['0%', '0%', '0%', '10%'],
          }}
        >
          {clients && clients.map(data => {
            const {svg, client} = data;
            
            return (
              <StyledWrapper>
                <StyledTile c={color}>
                  <SVGWrapper width={svg.width} height={svg.height}>
                    {getSVG(svg.id)}
                  </SVGWrapper>
                </StyledTile>
                <StyledLink target="_blank" c={color} href={client.url}>{client.name}</StyledLink>
              </StyledWrapper>
            )
          })}
        </StyledBox>
        </>
        )
      }
    </Transition>
  )}

  return (<></>)
}

export default Clients