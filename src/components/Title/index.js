import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useStoreState } from 'easy-peasy';
import { opacityFromState, positionFromState } from '~/utils/animation';
import Transition from 'react-transition-group/Transition';

const StyledTitle = styled(ReactMarkdown)`
  margin: 0 auto;
  opacity: ${(props) => {
    if (props.isPrerendering) {
      return 0;
    } else {
      return opacityFromState(props.state);
    }
  }};

  margin-bottom: ${(props) => {
    return props.hasSubtitle ? "0px !important" : "15px";
  }}

  transform: ${(props) => {
    if (props.isPrerendering) {
      return 'translateY(10px)';
    } else {
      return positionFromState(props.state);
    }
  }};
  transition: all ${(p) => p.theme.times[1]} ease-in-out;
  width: fit-content !important;
  color: ${(p) => p.c[0]};
  p {
    margin-bottom: ${p => p.hasSubtitle ? '0px' : '15px'};
    font-family: 'Mier A Bold';
    font-size: ${(p) => p.theme.fontSizes[2]};
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  @media screen and (max-width: ${(p) => p.theme.sizes.tablet}) {
    margin: initial;

    p {
      font-size: ${(p) => p.theme.fontSizes[2]};
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: ${(p) => p.theme.sizes.mobile}) {
    margin-bottom: 10px;

    p {
      font-size: ${(p) => p.theme.fontSizes[0]};
    }
  }
`;


const StyledSubtitle = styled(ReactMarkdown)`
text-align: center;
font-size: ${(p) => p.theme.fontSizes[1]};
opacity: .66;
padding: 0 !important;
transform: translateY(-7px);
letter-spacing: .5px;

@media screen and (max-width: ${(p) => p.theme.sizes.tablet}) {
  text-align: left;
  p {
    margin-top: 0px !important;
  }
}

`;

const Title = ({ source, color, timeout, subtitle }) => {
  const isPrerendering = useStoreState((state) => state.layout.isPrerendering);
  const hasSubtitle = subtitle ? true : false;
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {(state) => (
        <React.Fragment>
          <StyledTitle hasSubtitle={hasSubtitle} isPrerendering={isPrerendering} state={state} c={color}>
            {source}
          </StyledTitle>
          {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
        </React.Fragment>
      )}
    </Transition>
  );
};

export default Title;
