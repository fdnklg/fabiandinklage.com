import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Image } from 'rebass/styled-components';

import Paragraph from '~/components/Paragraph';
import Flex from '~/components/Flex';


const Profile = () => {
  const about = useStoreState(state => state.about);
  const color = useStoreState(state => state.color.color);
  const { intro, profileUrl } = about;
  return (
    <Flex>
      <Flex sx={{ textAlign: ['left', 'left', 'center'] }} pt={[3,5,5,6]} pb={[0,2,2,4]} width={[1, 4/5, 4/5, 3/4]} fontSize={[3,4,4,5]}>
        <Paragraph content={intro} color={color}/>
      </Flex>
      <Flex sx={{ textAlign: ['left', 'left', 'center'] }} pb={[4,5,5,6]} width={[1, 4/5, 4/5, 3/4]} fontSize={[3,4,4,5]}>
        <Paragraph content={intro} color={color}/>
      </Flex>
      <Image
        src={profileUrl}
        sx={{
          width: [ '100%', '90%', '80%' ],
          alignSelf: 'center'
        }}
        mb={[4,5,0]}
      />
    </Flex>
  );
};

export default Profile;
