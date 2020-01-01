import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Box, Text, Image } from 'rebass/styled-components';
import { CSSTransition } from "react-transition-group";
import LazyLoad from 'react-lazyload';

import Label from '~/components/Label';
import Link from '~/components/Link';

const StyledGridWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledBox = styled(Box)`
  opacity: 1;
  transition: opacity 0.3s;

  &.fade-enter {
    opacity: 0.1;
    transition: opacity 0.3s;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 0.3s;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
    transition: opacity 0.3s;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 0.3s;
  }
`;

const StyledText = styled(Text)`
  text-align: center;
  margin-top: 7px;
  font-size: ${p => p.theme.fontSizes[2]};
  letter-spacing: ${p => p.theme.letterSpacing[2]};
  color: ${p => p.c[0]};
`;

const Grid = (props) => {
  const { data } = props;
  const color = useStoreState(state => state.color.color);
  return (
    <CSSTransition
      classNames='fade'
      timeout={300}
      in={true}
      transitionAppear={true}
      unMountOnExit
    >
      <StyledBox
      sx={{
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      }}>
        {data.map((p,i) => {
          return (
            <Link sx={{ textDecoration: 'none' }} variant="nav" href={`projects/${p.path}`}>
              <Box sx={{ height: 'auto', overflow: 'hidden' }} key={`tile-${i}`} color='primary'>
                  <LazyLoad height={200} offset={200}>
                    <Image
                      src={p.thumbnail}
                      sx={{
                        width: [ '100%' ],
                      }}
                    />
                    {/* <Image
                      src={p.overlay}
                      sx={{
                        width: [ '100%' ],
                      }}
                    /> */}
                  </LazyLoad>
                <StyledText c={color}>{p.title}</StyledText>
              </Box>
            </Link>
          )
        })}
      </StyledBox>
    </CSSTransition>
  );
};

export default Grid;