import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import Paragraph from '~/components/Paragraph';
import Flex from '~/components/Flex';
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
            pt={[4, 5, 5, 6]}
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
          </Flex>
          <Cv timeout={timeout + 700} />
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Profile;
