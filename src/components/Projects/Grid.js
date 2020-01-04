import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Box, Text, Image } from 'rebass/styled-components';
import { CSSTransition } from "react-transition-group";
import ProgressiveImage from 'react-progressive-image';

import Label from '~/components/Label';
import Link from '~/components/Link';

const StyledGridWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledText = styled(Text)`
  text-align: center;
  margin-top: 15px;
  font-size: ${p => p.theme.fontSizes[2]};
  letter-spacing: ${p => p.theme.letterSpacing[2]};
  color: ${p => p.c[0]};
`;

const StyledBox = styled(Box)`
  @media (max-width: ${p => p.theme.sizes.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
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
      filter: saturate(100%);
      transition: filter ${p => p.theme.times[0]};

      &:hover {
        filter: saturate(100%);
        transition: filter ${p => p.theme.times[0]};
      }

      @media (max-width: ${p => p.theme.sizes.mobile}) {
        filter: saturate(100%);
      }
    }
  }

  div {
    img
  }

`;

const ThumbnailImage = styled(Image)`
  position: absolute;
  transition: opacity ${ p => p.theme.times[1] } ease-in-out;
  &:hover {
    opacity: 0;
    transition: opacity ${ p => p.theme.times[1] } ease-in-out;
  }
`

const Grid = (props) => {
  const { data } = props;
  const color = useStoreState(state => state.color.color);
  const setColor = useStoreActions(actions => actions.color.setColor);
  let ref = null;
  let box = null;
  let height = 'null';

  useEffect(() => {
     height = `${ref.offsetWidth / 3 * 2}px`;
     const boxes = document.querySelectorAll('.thumb-box');
     boxes.forEach(box => box.style.height = height);
  })

  return (
    <CSSTransition
      classNames='fade'
      timeout={300}
      in={true}
      transitionAppear={true}
      unMountOnExit
    >
      <Box
      sx={{
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: ['repeat(auto-fit, minmax(280px, 1fr))', 'repeat(auto-fit, minmax(350px, 1fr))' , 'repeat(auto-fit, minmax(400px, 1fr))'],
      }}>
        {data.map((p,i) => {
          return (
            <StyledLink onMouseOver={() =>  setColor(p.color)} onMouseOut={() =>  setColor(['#121337', '#fff'])} sx={{ textDecoration: 'none' }} variant="nav" href={`projects/${p.path}`}>
              <Box className="thumb-box" ref={(target) => { box = target; }} sx={{ overflow: 'hidden', position: 'relative' }} key={`tile-${i}`} color='primary'>
                    <ProgressiveImage src={p.overlay} placeholder={p.lazy}>
                      {src => <Image
                        ref={(target) => { ref = target; }}
                        src={src}
                        sx={{
                          width: [ '100%' ],
                          position: 'absolute'
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
              </Box>
              <StyledText c={color}>{p.title}</StyledText>
            </StyledLink>
          )
        })}
      </Box>
    </CSSTransition>
  );
};

export default Grid;