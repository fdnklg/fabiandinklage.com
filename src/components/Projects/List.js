import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Box } from 'rebass/styled-components';
import { compare } from '~/utils';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from '~/utils/animation';

import Button from '../Button/';
import RouterLink from '../RouterLink/';
import { content } from '~/data/';

const StyledListWrapper = styled.div`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  font-size: ${p => p.theme.fontSizes[3]};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTR = styled.tr`
  border-top: ${p => (p.border ? '1px solid' + p.c[0] : 'none')};

  td {
    padding-top: ${p => (p.newYear ? p.theme.space[4] : '15px')};
    padding-bottom: ${p => (p.lastItemOfYear ? p.theme.space[4] : '15px')};
    font-size: ${p => p.theme.fontSizes[4]};
    transition: all ${p => p.theme.times[0]} ease-in-out;
    color: ${p => p.c[0]};

    @media (max-width: ${p => p.theme.sizes.desktop}) {
      padding-top: ${p => (p.newYear ? p.theme.space[3] : '11px')};
      padding-bottom: ${p => (p.lastItemOfYear ? p.theme.space[3] : '11px')};
    }

    @media (max-width: ${p => p.theme.sizes.tablet}) {
      padding-top: ${p => (p.newYear ? p.theme.space[3] : '8px')};
      padding-bottom: ${p => (p.lastItemOfYear ? p.theme.space[3] : '8px')};
    }
  }

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[4]};
    td {
      padding-right: 15px;
      font-size: ${p => p.theme.fontSizes[3]};
    }
  }
`;

const StyledTD = styled.td`
  text-align: ${p => (p.type === 'last' ? 'end' : 'start')};
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
  margin-top: ${p => (p.type === 'last' ? '10px' : '0px')};
  margin-top: 3px;
  letter-spacing: 0.5px;

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    text-align: left;
  }
`;

const StyledTDType = styled.td`
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
  margin-top: 3px;
  letter-spacing: 0.5px;

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    text-align: ${p => (p.type === 'last' ? 'end' : 'start')};
  }

  @media (max-width: ${p => p.theme.sizes.mobile}) {
    display: none;
  }
`;

const StyledButtonWrapper = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: ${p => p.theme.sizes.mobile}) {
    padding-bottom: 20px;
    justify-content: flex-start;
  }
`;

const StyledTDButton = styled(StyledTDType)`
  text-align: ${p => (p.type === 'last' ? 'end' : 'start')};
  @media (max-width: ${p => p.theme.sizes.desktop}) {
    display: none;
  }
`;

const StyledTitle = styled.td`
  font-family: ${p => p.theme.fonts.headline};
  text-align: ${p => (p.type === 'last' ? 'end' : 'start')};
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
  transition: opacity ${p => p.theme.times[0]} ease-in-out;
  letter-spacing: 0.5px;

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[3]};
    text-align: left;
  }

  &:hover {
    opacity: 0.5;
    transition: all ${p => p.theme.times[1]} ease-in-out;
  }
`;

const isNewYear = (data, i) => {
  const l = data.length;
  const previous = data[i === 0 ? l - 1 : i - 1];
  const current = data[i];
  const next = data[i === l - 1 ? 0 : i + 1];
  return previous.year !== current.year;
};

const lastItemOfYear = (data, i) => {
  const l = data.length;
  const previous = data[i === 0 ? l - 1 : i - 1];
  const current = data[i];
  const next = data[i === l - 1 ? 0 : i + 1];
  return next.year !== current.year;
};

const List = p => {
  const { data } = p;
  const colorDefault = useStoreState(state => state.color.default);
  const color = useStoreState(state => state.color.color);
  const setColor = useStoreActions(actions => actions.color.setColor);
  const sortedByYear = data.sort(compare);
  const base = useStoreState(state => state.base);
  const others = content[base].others;

  return (
    <Transition
      in={true}
      timeout={0}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledListWrapper state={state}>
          <StyledTable>
            <tbody>
              {sortedByYear.map((p, i) => {
                const newYear = isNewYear(data, i);
                const lastItem = lastItemOfYear(data, i);
                return (
                  <StyledTR
                    lastItemOfYear={lastItem}
                    newYear={newYear}
                    c={color}
                    border={newYear}
                    key={`tr-${i}`}
                  >
                    <StyledTD>{newYear ? p.year : ''}</StyledTD>
                    <RouterLink color={color} to={`/projects/${p.path}/${base}`}>
                    <Box
                      onMouseOver={() => setColor(p.color)}
                      onMouseOut={() => setColor(colorDefault)}
                      sx={{ textDecoration: 'none', color: color[0] }}
                      variant="nav"
                    >
                      <StyledTitle>{p.title}</StyledTitle>
                    </Box>
                    </RouterLink>
                    <StyledTDType type="last">{p.type}</StyledTDType>
                    <StyledTDButton type="last">
                      <Button
                        href={p.url}
                        target="_blank"
                        px={3}
                        py={2}
                        c={color}
                        fontSize={[2, 2, 2, 3]}
                      >
                        {others.launch}
                      </Button>
                    </StyledTDButton>
                  </StyledTR>
                );
              })}
            </tbody>
          </StyledTable>
        </StyledListWrapper>
      )}
    </Transition>
  );
};

export default List;
