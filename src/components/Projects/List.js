import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Link } from 'rebass/styled-components';
import { compare } from '~/utils';

const StyledListWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledTable = styled.table`
  width: 100%;
  font-size: ${p => p.theme.fontSizes[4]};
  border-collapse: collapse;
`;

const StyledTR = styled.tr`
  border-top: ${p => p.border ? '1px solid' + p.c[0] : 'none'};
  padding-top: ${p => !p.border ? '1em !important' : '0 !important'};

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[1]};
    td {
      padding-right: 15px;
    }
  }
`;

const StyledTD = styled.td`
  text-align: ${p => p.type === 'last' ? 'end' : 'start'};
  width:  ${p => p.type === 'first' ? 'end' : 'start'};
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
`;

const StyledTitle = styled.td`
  font-family: ${p => p.theme.fonts.headline};
  text-align: ${p => p.type === 'last' ? 'end' : 'start'};
  width:  ${p => p.type === 'first' ? 'end' : 'start'};
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
  transition: opacity ${p => p.theme.times[0]} ease-in-out;

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[2]};
  }

  &:hover {
    opacity: .5;
    transition: opacity ${p => p.theme.times[0]} ease-in-out;
  }
`;

const isNewYear = (data,i) => {
  const l = data.length;
  const previous = data[i===0?l-1:i-1];
  const current = data[i];
  const next = data[i===l-1?0:i+1];
  return previous.year !== current.year;
}

const List = (props) => {
  const { data } = props;
  const color = useStoreState(state => state.color.color);
  const setColor = useStoreActions(actions => actions.color.setColor);
  const sortedByYear = data.sort(compare);

  return (
    <StyledListWrapper>
      <StyledTable>
        <tbody>
          { sortedByYear.map((p,i) => {
            const newYear = isNewYear(data,i)
            return (
                <StyledTR c={color} border={newYear} key={`tr-${i}`}>
                    <StyledTD>{newYear ? p.year : ''}</StyledTD>
                    <Link onMouseOver={() =>  setColor(p.color)} onMouseOut={() =>  setColor(['#000', '#fff'])} sx={{ textDecoration: 'none', color: color[0] }} variant="nav" href={`projects/${p.path}`}>
                      <StyledTitle>{p.title}</StyledTitle>
                    </Link>
                    <StyledTD type="last">{p.type}</StyledTD>
                </StyledTR>
            )
          }) }
        </tbody>
      </StyledTable>
    </StyledListWrapper>
  );
};

export default List;