import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Box, Text, Image, Link } from 'rebass/styled-components';

const StyledGridWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledText = styled(Text)`
  text-align: center;
`;

const Grid = (props) => {
  const { data } = props;
  return (
    <Box
    sx={{
      display: 'grid',
      gridGap: 4,
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    }}>
      {data.map((p,i) => {
        return (
          <Link variant="nav" href={`projects/${p.path}`}>
            <Box key={`tile-${i}`} color='primary'>
              <Image
                src={p.thumbnail}
                sx={{
                  width: [ '100%' ],
                }}
              />
              <StyledText>{p.title}</StyledText>
            </Box>
          </Link>
        )
      })}
    </Box>

  );
};

export default Grid;