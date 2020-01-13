import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Image } from 'rebass/styled-components';
import Transition from "react-transition-group/Transition";
import { opacityFromState } from '~/utils/animation';

import Paragraph from '~/components/Paragraph';
import Flex from '~/components/Flex';
import List from '~/components/List';

const StyledFlex = styled(Flex)`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const Profile = (p) => {
  const { timeout } = p;
  const about = useStoreState(state => state.about);
  const color = useStoreState(state => state.color.color);
  const { intro, profileUrl, vita } = about;

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      { state => (
        <StyledFlex state={state}>
          <Flex sx={{ textAlign: ['left', 'left', 'center'] }} pb={[4,5,5,6]} width={[1, 4/5, 4/5, 3/4]} fontSize={[3,4,4,5]}>
            <Paragraph timeout={625} content={vita} color={color}/>
            <br/>
            <br/>
            {/* <Paragraph content={intro} color={color}/> */}
              <List timeout={750} c={color}>
                <li>Selected Clients:</li>
                <li></li>
                <li>Berkmann Klein Center (at) Harvard</li>
                <li>Google News Lab</li>
                <li>Massachusetts Institute of Technology</li>
                <li>GiZ (Gesellschaft für internationale Zusammenarbeit)</li>
                <li>Berliner Morgenpost</li>
                <li>Deutsches Historisches Museum</li>
              </List>
          </Flex>
          <Image
            src={profileUrl}
            pb={[4,5,5,6]}
            sx={{
              width: [ '100%', '90%', '80%' ],
              alignSelf: 'center'
            }}
          />
        </StyledFlex>
      )}
    </Transition>
    );
};

export default Profile;







