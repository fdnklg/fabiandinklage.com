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

const StyledText = styled(Text)`
  text-align: center;
  margin-top: 7px;
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

  img {
    filter: saturate(75%);
    transition: filter ${p => p.theme.times[0]};

    &:before() {
      background: red;
    }
  }

  img:hover {
    filter: saturate(100%);
    transition: filter ${p => p.theme.times[0]};
  }
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
      <Box
      sx={{
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      }}>
        {data.map((p,i) => {
          return (
            <StyledLink sx={{ textDecoration: 'none' }} variant="nav" href={`projects/${p.path}`}>
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
            </StyledLink>
          )
        })}
      </Box>
    </CSSTransition>
  );
};

export default Grid;