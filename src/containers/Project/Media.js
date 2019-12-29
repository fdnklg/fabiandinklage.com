import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Image, Text } from 'rebass/styled-components/';

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  @media (max-width: ${p => p.theme.sizes.tablet}) {
    flex-direction: column;
  }
`;

const Media = props => {
  const { data } = props;
  return (
    <>
      { data.map((media,i) => {
        return (
          <Box>
            <Image
              src={media.url}
              sx={{
                width: [ '100%' ],
                background: 'red',
                borderWidth: '0px'
              }}
              mt={[3,4,5]}
            />
            <Text sx={{ textAlign: 'center' }} mb={[3,4,5]} mt={[2,2,3]}>{media.content}</Text>
          </Box>
        )
      }) }
    </>
  );
};

export default Media;
