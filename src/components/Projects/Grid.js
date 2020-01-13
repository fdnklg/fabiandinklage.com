import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { colorMode } from '~/utils';
import { Box, Text, Image } from 'rebass/styled-components';
import { CSSTransition } from "react-transition-group";
import ProgressiveImage from 'react-progressive-image';
import { compare } from '~/utils';
import Transition from "react-transition-group/Transition";
import { opacityFromState } from '~/utils/animation';


import Label from '~/components/Label';
import Link from '~/components/Link';

const StyledGridWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledBox = styled(Box)`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const StyledText = styled(Text)`
  text-align: center;
  margin-top: 15px;
  font-size: ${p => p.theme.fontSizes[2]};
  letter-spacing: ${p => p.theme.letterSpacing[2]};
  color: ${p => p.c[0]};
`;

const StyledLink = styled(Link)`
  div {
    div {
      transition: opacity ${p => p.theme.times[0]} ease-in-out;
    }
  }

  &:hover {
    opacity: 1;
    div {
      div {
        transition: opacity ${p => p.theme.times[0]} ease-in-out;
        opacity: .5;
      }
    }
  }

  div {
    img {
      transition: all ${p => p.theme.times[0]};

      &:hover {
        transition: all ${p => p.theme.times[0]};
      }
    }
  }
`;

const ThumbnailImage = styled(Image)`
  position: absolute;
  transition: opacity ${ p => p.theme.times[1] } ease-in-out;
  filter: saturate(.25);

  @media (max-width: ${p => p.theme.sizes.mobile}) {
    filter: saturate(1);
  }

  &:hover {
    opacity: 0;
    transition: opacity ${ p => p.theme.times[1] } ease-in-out;
  }
`

const GifImage = styled(Image)`
  filter: saturate(1);
`;

const StyledThumbBox = styled(Box)`
  @media (max-width: ${p => p.theme.sizes.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const Grid = (p) => {
  const { data } = p;
  const color = useStoreState(state => state.color.color);
  const colorDefault = useStoreState(state => state.color.default);
  const setColor = useStoreActions(actions => actions.color.setColor);
  const sortedByYear = data.sort(compare);
  let ref = null;
  let box = null;
  let height = 'null';
  let colors = '';

  useEffect(() => {
    height = `${ref.offsetWidth / 3 * 2}px`;
    const boxes = document.querySelectorAll('.thumb-box');
    boxes.forEach(box => box.style.height = height);
  }, [])

  return (
    <Transition
      in={true}
      timeout={0}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      { state => (
        <StyledBox
          state={state}
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: ['repeat(auto-fit, minmax(280px, 1fr))', 'repeat(auto-fit, minmax(350px, 1fr))' , 'repeat(auto-fit, minmax(400px, 1fr))'],
          }}>
            {data.map((p,i) => {
              return (
                <StyledLink onMouseOver={() =>  setColor(colorMode(p.color))} onMouseOut={() => { setColor(colorDefault) }} sx={{ textDecoration: 'none' }} variant="nav" href={`projects/${p.path}`}>
                  <StyledThumbBox className="thumb-box" ref={(target) => { box = target; }} sx={{ overflow: 'hidden', position: 'relative' }} key={`tile-${i}`} color='primary'>
                        <ProgressiveImage src={p.overlay} placeholder={p.lazy}>
                          {src => <GifImage
                            ref={(target) => { ref = target; }}
                            src={src}
                            sx={{
                              width: [ '100%' ],
                              position: 'absolute',
                            }}
                          /> }
                        </ProgressiveImage>
                        <ProgressiveImage src={p.thumbnail} placeholder={p.lazy}>
                          {src => <ThumbnailImage
                            src={src}
                            sx={{
                              width: [ '100%' ],
                            }}
                          /> }
                        </ProgressiveImage>
                  </StyledThumbBox>
                  <StyledText c={color}>{p.title}</StyledText>
                </StyledLink>
              )
            })}
          </StyledBox>
      )}
    </Transition>
  );
};

export default Grid;