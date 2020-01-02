import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Image } from 'rebass/styled-components';

import Paragraph from '~/components/Paragraph';
import Flex from '~/components/Flex';


const Profile = () => {
  const about = useStoreState(state => state.about);
  const color = useStoreState(state => state.color.color);
  const { intro, profileUrl, vita } = about;
  return (
    <Flex>
      <Flex sx={{ textAlign: ['left', 'left', 'center'] }} pb={[4,5,5,6]} width={[1, 4/5, 4/5, 3/4]} fontSize={[3,4,4,5]}>
        <Paragraph content={vita} color={color}/>
        <br/>
        <Paragraph content={intro} color={color}/>
      </Flex>
      <Image
        src={profileUrl}
        pb={[4,5,5,6]}
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
