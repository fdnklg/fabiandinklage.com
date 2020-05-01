import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import Paragraph from '~/components/Paragraph';
import Flex from '~/components/Flex';
import List from '~/components/List';
import Image from '~/components/Image';
import Cv from '~/components/Cv';
import Title from '~/components/Title';

import { content } from '~/data';

const StyledFlex = styled(Flex)`
  opacity: ${props => {
    if (props.isPrerendering) {
      return 0
    } else {
      return opacityFromState(props.state)
    }
  }};

  transform: ${props => {
    if (props.isPrerendering) {
      return 'translateY(10px)'
    } else {
      return positionFromState(props.state)
    }
  }};
  width: 100%;
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
  const color = useStoreState(state => state.color.color);
  const isPrerendering = useStoreState(state => state.layout.isPrerendering);
  const base = useStoreState(state => state.base);
  const about = content[base].about;
  const { intro, profileUrl, vita } = about;

  const titleAbout = content[base].title.about;
  const titleClients = content[base].title.clients;

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledFlex state={state} isPrerendering={isPrerendering}>
          <Flex
            sx={{ textAlign: ['left', 'left', 'center'] }}
            py={[4, 5, 5, 6]}
            width={[1, 4 / 5, 4 / 5, 3 / 4]}
            fontSize={[3, 4, 4, 5]}
          >
            <Title timeout={timeout + 200} source={titleAbout} color={color} />
            <Paragraph timeout={timeout + 200} content={vita} color={color} />
            <Image
              src={profileUrl}
              alt={"Fabian Dinklage is a Data Visualization & Interaction Designer."}
              timeout={timeout + 400}
            />
            <Title timeout={timeout + 600} source={titleClients} color={color} />
            <List timeout={timeout + 600} c={color}>
              <li>Berkmann Klein Center (at) Harvard</li>
              <li>Berliner Morgenpost</li>
              <li>Deutsches Historisches Museum</li>
              <li>Deutsche Bahn</li>
              <li>GiZ (Gesellschaft für internationale Zusammenarbeit)</li>
              <li>Google News Lab</li>
              <li>MIT (Massachusetts Institute of Technology)</li>
              <li>Spiegel Online</li>
            </List>
          </Flex>
          <Cv timeout={timeout + 800} />
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Profile;
