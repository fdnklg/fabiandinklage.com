import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Link } from 'rebass/styled-components';

const StyledListWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledTable = styled.table`
  width: 100%;
  font-size: ${p => p.theme.fontSizes[4]};
  border-collapse: collapse;
  margin: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
`;

const StyledTR = styled.tr`
  border-top: ${p => p.border ? '1px solid' + p.c[0] : 'none'};
`;

const StyledTD = styled.td`
  text-align: ${p => p.type === 'last' ? 'end' : 'start'};
  width:  ${p => p.type === 'first' ? 'end' : 'start'};
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
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
  return (
    <StyledListWrapper>
      <StyledTable>
        <tbody>
          { data.map((p,i) => {
            const newYear = isNewYear(data,i)
            return (
                <StyledTR c={color} border={newYear} key={`tr-${i}`}>
                    <StyledTD>{newYear ? p.year : ''}</StyledTD>
                    <Link sx={{ textDecoration: 'none', color: color[0] }} variant="nav" href={`projects/${p.path}`}>
                      <StyledTD>{p.title}</StyledTD>
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