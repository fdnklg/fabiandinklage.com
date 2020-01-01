import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Image, Text } from 'rebass/styled-components/';
import LazyLoad from 'react-lazyload';

import Label from '~/components/Label';

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
            <LazyLoad height={200} offset={200}>
              <Image
                src={media.url}
                sx={{
                  width: [ '100%' ],
                  background: 'red',
                  borderWidth: '0px'
                }}
                mt={[4,4,5]}
                mb={[2,3,3]}
              />
            </LazyLoad>
            <Label align="center" content={media.content} mb={[3,4,5]} mt={[2,2,3]}></Label>
          </Box>
        )
      }) }
    </>
  );
};

export default Media;