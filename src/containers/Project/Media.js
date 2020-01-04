import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Image, Text } from 'rebass/styled-components/';
import LazyLoad from 'react-lazyload';
import ProgressiveImage from 'react-progressive-image';

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
          <Box pb={[4, 5]}>

              <ProgressiveImage src={media.url} placeholder={media.lazy}>
                {src => <Image
                  src={src}
                  sx={{
                    width: [ '100%' ],
                  }}
                /> }
              </ProgressiveImage>

            <Label align="center" content={media.content} mb={[3,4,5]} mt={[2,2,3]}></Label>
          </Box>
        )
      }) }
    </>
  );
};

export default Media;
