import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';

import Paragraph from '~/components/Paragraph';

const Profile = () => {
  const about = useStoreState(state => state.about);
  const color = useStoreState(state => state.color.color);

  const { intro } = about;
  return (
    <>
      <Paragraph content={intro} color={color}/>
      <Paragraph content={intro} color={color}/>
    </>
  );
};

export default Profile;
