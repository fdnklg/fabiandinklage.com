import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Box, Text, Image, Link } from 'rebass/styled-components';

import Label from '~/components/Label';

const StyledGridWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledText = styled(Label)`
  text-align: center;
  margin-top: 10px;
  font-size: ${p => p.theme.fontSizes[2]};
  color: ${p => p.c[0]};
`;

const Grid = (props) => {
  const { data } = props;
  const color = useStoreState(state => state.color.color);
  return (
    <Box
    sx={{
      display: 'grid',
      gridGap: 4,
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    }}>
      {data.map((p,i) => {
        return (
          <Link sx={{ textDecoration: 'none' }} variant="nav" href={`projects/${p.path}`}>
            <Box key={`tile-${i}`} color='primary'>
              <Image
                src={p.thumbnail}
                sx={{
                  width: [ '100%' ],
                }}
              />
              <StyledText c={color}>{p.title}</StyledText>
            </Box>
          </Link>
        )
      })}
    </Box>

  );
};

export default Grid;