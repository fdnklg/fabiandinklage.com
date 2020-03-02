import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { colorMode } from '~/utils';
import { Box, Text, Image } from 'rebass/styled-components';
import { CSSTransition } from 'react-transition-group';
import ProgressiveImage from 'react-progressive-image';
import { compare } from '~/utils';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from '~/utils/animation';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import Label from '~/components/Label';
import Link from '~/components/Link';

const StyledGridWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledBox = styled(Box)`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const ThumbnailImage = styled(Image)`
  position: absolute;
  transition: opacity ${p => p.theme.times[1]} ease-in-out;
  filter: saturate(0.25);

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    &.hide {
      opacity: 0;
    }
  }

  @media (max-width: ${p => p.theme.sizes.mobile}) {
    filter: saturate(1);
  }

  &:hover {
    opacity: 0;
    transition: opacity ${p => p.theme.times[1]} ease-in-out;
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
        opacity: 0.5;
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

const GifImage = styled(Image)`
  filter: saturate(1);
`;

const StyledThumbBox = styled(Box)`
  @media (max-width: ${p => p.theme.sizes.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const Grid = p => {
  const { data } = p;
  const color = useStoreState(state => state.color.color);
  const colorDefault = useStoreState(state => state.color.default);
  const setColor = useStoreActions(actions => actions.color.setColor);
  const sortedByYear = data.sort(compare);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [height, setHeight] = useState(null);
  let observed = null;
  let colors = '';

  const StyledText = styled(Text)`
    margin-top: 15px;
    line-height: 140%;
    transition: opacity ${p => p.theme.times[1]} ease-in-out;
    font-size: ${p => p.theme.fontSizes[2]};
    letter-spacing: ${p => p.theme.letterSpacing[2]};
    color: ${p => p.c[0]};

    b {
      font-family: 'Mier A Bold';
    }
  `;

  const handleResize = (w) => {
    const h = (w / 3) * 2;
    const boxes = document.querySelectorAll('.thumb-box');
    boxes.forEach(box => (box.style.height = `${h}px`));
  }

  useEffect(() => {
    console.log(activeIndex);
    handleResize(observed.offsetWidth)
    window.addEventListener('resize', () => handleResize(observed.offsetWidth))
  }, [observed, activeIndex]);

  const handleMouseOver = (color, index) => {
    setColor(colorMode(color))
    setActiveIndex(index);
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const thumbnails = document.querySelectorAll('.thumbnail-img');

      thumbnails.forEach((thumb, i) => {
        const elm = thumb.getBoundingClientRect();
        if (elm.top < 400 && elm.top > 100) {
          thumb.classList.add('hide');
        } else {
          thumb.classList.remove('hide');
        }
      });

      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    null,
    false,
    300
  );

  return (
    <Transition
      in={true}
      timeout={0}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledBox
          state={state}
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: [
              'repeat(auto-fit, minmax(280px, 1fr))',
              'repeat(auto-fit, minmax(350px, 1fr))',
              'repeat(auto-fit, minmax(400px, 1fr))',
            ],
          }}
        >
          {data.map((p, i) => {
            return (
              <StyledLink
                onMouseOver={() => handleMouseOver(p.color, i)}
                onMouseOut={() => {
                  setColor(colorDefault);
                  setActiveIndex(null);
                }}
                sx={{ textDecoration: 'none' }}
                key={`griditem-key-${i}`}
                variant="nav"
                href={`projects/${p.path}`}
              >
                <StyledThumbBox
                  className="thumb-box"
                  sx={{ overflow: 'hidden', position: 'relative' }}
                  key={`tile-${i}`}
                  color="primary"
                >
                  <ProgressiveImage src={p.overlay} placeholder={p.lazy}>
                    {src => (
                      <GifImage
                        ref={target => {
                          // only set ref dom object if it exists!
                          if (target) {
                            observed = target;
                          }
                        }}
                        src={src}
                        index={i}
                        sx={{
                          width: ['100%'],
                          position: 'absolute',
                        }}
                      />
                    )}
                  </ProgressiveImage>
                  <ProgressiveImage src={p.thumbnail} placeholder={p.lazy}>
                    {src => (
                      <ThumbnailImage
                        className="thumbnail-img"
                        src={src}
                        index={i}
                        sx={{
                          width: ['100%'],
                        }}
                      />
                    )}
                  </ProgressiveImage>
                </StyledThumbBox>
                <StyledText 
                  c={color}
                  index={i}
                >
                  <b>{p.title}: </b>
                  {p.subtitle}
                </StyledText>
              </StyledLink>
            );
          })}
        </StyledBox>
      )}
    </Transition>
  );
};

export default Grid;
