import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Box, Text } from 'rebass/styled-components';
import ProgressiveImage from 'react-progressive-image';
import { compare } from '~/utils';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from '~/utils/animation';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import Link from '~/components/Link';
import RouterLink from '~/components/RouterLink';

const StyledGridWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledBox = styled(Box)`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const ProjectBox = styled(Box)`
  border-radius: 6px;
`;

const StyledText = styled(Text)`
  margin-top: 15px;
  line-height: 140%;
  transition: opacity ${p => p.theme.times[1]} ease-in-out;
  font-size: ${p => p.theme.fontSizes[2]};
  letter-spacing: ${p => p.theme.letterSpacing[2]};
  color: ${p => p.c[0]};
  opacity: 1;

  cite {
    font-family: 'Mier A Regular';
    opacity: 0.66;
    font-style: normal;
  }

  b {
    font-family: 'Mier A Bold';
    opacity: 1;
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

const StyledThumbBox = styled(Box)`
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(26, 25, 43, 0.014),
    0 12.5px 10px rgba(26, 25, 43, 0.02),
    0 22.3px 17.9px rgba(26, 25, 43, 0.022),
    0 41.8px 33.4px rgba(26, 25, 43, 0.026), 0 100px 80px rgba(26, 25, 43, 0.02);
  @media (max-width: ${p => p.theme.sizes.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const Grid = p => {
  const { data } = p;
  const color = useStoreState(state => state.color.color);
  const base = useStoreState(state => state.base);
  const colorDefault = useStoreState(state => state.color.default);
  const setColor = useStoreActions(actions => actions.color.setColor);
  const sortedByYear = data.sort(compare);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [height, setHeight] = useState(null);
  let observed = null;
  let colors = '';

  const handleResize = w => {
    const h = (w / 3) * 2;
    const boxes = document.querySelectorAll('.thumb-box');
    boxes.forEach(box => (box.style.height = `${h}px`));
  };

  useEffect(() => {
    if (observed) {
      handleResize(observed.offsetWidth);
      window.addEventListener('resize', () =>
        handleResize(observed.offsetWidth)
      );
    }
  }, [observed, activeIndex]);

  const handleMouseOver = (data, index) => {
    pauseAllVideos();

    const vidNode = document.getElementById(`video-${data.path}`);
    vidNode.style.filter = 'grayscale(0)';
    vidNode.parentElement.style.transition = 'all .075s ease-in-out';
    // vidNode.parentElement.style.boxShadow =
    //   '4px 21px 40px 1px rgba(0,0,0,0.085)';
    vidNode.parentElement.style.transform = 'scale(1.045)';
    setHovered(true);

    vidNode.play();
    setActiveIndex(index);
  };

  const pauseAllVideos = data => {
    const thumbnails = document.querySelectorAll('.thumbnail-video');
    thumbnails.forEach(thumb => {
      thumb.style.filter = 'grayscale(.75)';
      thumb.pause();
    });
  };

  const handleMouseOut = data => {
    const vidNode = document.getElementById(`video-${data.path}`);
    vidNode.style.filter = 'grayscale(0.75)';
    vidNode.parentElement.style.transition = 'all .075s ease-in-out';
    vidNode.parentElement.style.transform = 'scale(1)';
    vidNode.pause();
    setColor(colorDefault);
    setActiveIndex(null);
    setHovered(false);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const thumbnails = document.querySelectorAll('.thumbnail-video');

      if (!hovered) {
        thumbnails.forEach((thumb, i) => {
          const elm = thumb.getBoundingClientRect();
          if (elm.top < 400 && elm.top > 100) {
            thumb.style.filter = 'grayscale(0)';
            thumb.parentElement.style.transition = 'all .075s ease-in-out';
            thumb.parentElement.style.transform = 'scale(1.045)';
            thumb.play();
          } else {
            thumb.style.filter = 'grayscale(.75)';
            thumb.parentElement.style.transform = 'scale(1)';
            thumb.pause();
          }
        });
      }
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
            alignItems: 'start',
            gridTemplateColumns: [
              'repeat(auto-fit, minmax(250px, 1fr))',
              'repeat(auto-fit, minmax(240px, 1fr))',
              'repeat(auto-fit, minmax(300px, 1fr))',
            ],
          }}
        >
          {data
            .filter(p => p.subtitle)
            .map((p, i) => {
              return (
                <RouterLink
                  key={`key-routerlink-${p.label}-${i}`}
                  hover={true}
                  color={color}
                  to={`/projects/${p.path}/${base}`}
                >
                  <Box
                    onMouseOver={() => handleMouseOver(p, i)}
                    onMouseOut={() => handleMouseOut(p)}
                    sx={{ textDecoration: 'none' }}
                    key={`griditem-key-${i}`}
                    variant="nav"
                    href={`projects/${p.path}/${base}`}
                  >
                    <StyledThumbBox
                      className="thumb-box"
                      sx={{ overflow: 'hidden', position: 'relative' }}
                      key={`tile-${i}`}
                      color="primary"
                    >
                      <video
                        className="thumbnail-video"
                        id={`video-${p.path}`}
                        ref={target => {
                          if (target) {
                            observed = target;
                          }
                        }}
                        style={{
                          position: 'absolute',
                          width: '100%',
                          filter: 'grayscale(0.5)',
                        }}
                        width="100%"
                        height="100%"
                        loop
                        preload="none"
                        poster={p.thumbnail}
                        playsInline
                        muted
                      >
                        <source src={p.overlay} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </StyledThumbBox>
                    <StyledText c={color} index={i}>
                      <b>{p.title}: </b>
                      <cite>{p.subtitle}</cite>
                    </StyledText>
                  </Box>
                </RouterLink>
              );
            })}
        </StyledBox>
      )}
    </Transition>
  );
};

export default Grid;

/*

                          return (
                            <video
                              className="thumbnail-video"
                              id={`video-${p.path}`}
                              ref={target => {
                                if (target) {
                                  observed = target;
                                }
                              }}
                              style={{
                                position: 'absolute',
                                width: '100%',
                                filter: 'grayscale(0.5)',
                              }}
                              width="100%"
                              height="100%"
                              loop
                              playsInline
                              muted
                            >
                              <source src={p.overlay} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          );

*/
