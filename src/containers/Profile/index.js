import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Image } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from '~/utils/animation';

import Paragraph from '~/components/Paragraph';
import Flex from '~/components/Flex';
import List from '~/components/List';
import Cv from '~/components/Cv';
import Title from '~/components/Title';



const StyledFlex = styled(Flex)`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const StyledLi = styled.li`
  font-family: 'Mier A Bold';
  font-size: 16px;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Profile = p => {
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
      {state => (
        <StyledFlex state={state}>
          <Flex
            sx={{ textAlign: ['left', 'left', 'center'] }}
            pb={[4, 5, 5, 6]}
            width={[1, 4 / 5, 4 / 5, 3 / 4]}
            fontSize={[3, 4, 4, 5]}
          >
            <Title timeout={625} source='About me' color={color} />
            <Paragraph timeout={625} content={vita} color={color} />
            <br />
            <br />
            <br />
            <br />
            <Image
              src={profileUrl}
              pb={[4, 5, 5, 6]}
              sx={{
                width: ['100%'],
                alignSelf: 'center',
              }}
            />
            <br />
            <List timeout={750} c={color}>
              <li><Title timeout={625} source='Selected Clients' color={color} /></li>
              <li>Berkmann Klein Center (at) Harvard</li>
              <li>Berliner Morgenpost</li>
              <li>Deutsches Historisches Museum</li>
              <li>GiZ (Gesellschaft für internationale Zusammenarbeit)</li>
              <li>Google News Lab</li>
              <li>MIT (Massachusetts Institute of Technology)</li>
              <li>Spiegel Online</li>
            </List>
          </Flex>
          <Cv timeout={700} />
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Profile;
