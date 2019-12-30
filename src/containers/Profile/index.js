import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Flex, Image } from 'rebass/styled-components';

import Paragraph from '~/components/Paragraph';

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  flex-direction: column;
`;

const Profile = () => {
  const about = useStoreState(state => state.about);
  const color = useStoreState(state => state.color.color);

  const { intro, profileUrl } = about;
  return (
    <StyledFlex>
      <StyledFlex pt={[4,5,6]} pb={5} width={[1, 4/5, 3/4, 2/3]} fontSize={[3,4,5]}>
        <Paragraph content={intro} color={color}/>
      </StyledFlex>
      <StyledFlex pb={[4,5,6]} width={[1, 4/5, 3/4, 2/3]} fontSize={[3,4,5]}>
        <Paragraph content={intro} color={color}/>
      </StyledFlex>
      <Image
        src={profileUrl}
        sx={{
          width: [ '100%', '90%', '80%' ],
          alignSelf: 'center'
        }}
        mb={[4,5,6]}
      />
    </StyledFlex>
  );
};

export default Profile;
