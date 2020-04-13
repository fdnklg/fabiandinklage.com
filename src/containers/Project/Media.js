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
      {data.map((media, i) => {
        return (
          <Box pb={[4, 5]}>
            <ProgressiveImage
              key={`media-key-${i}`}
              src={media.url}
              placeholder={media.lazy}
            >
              {src => (
                <Image
                  src={media.url}
                  alt={media.alt}
                  mb={2}
                  sx={{
                    width: ['100%'],
                  }}
                />
              )}
            </ProgressiveImage>

            <Label
              key={`media-label-${i}`}
              align="center"
              content={media.content}
            ></Label>
          </Box>
        );
      })}
    </>
  );
};

export default Media;
