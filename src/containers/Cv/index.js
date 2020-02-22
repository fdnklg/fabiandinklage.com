import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Box, Text, Image } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from '~/utils/animation';

import Button from '~/components/Button';
import List from '~/components/List';
import Flex from '~/components/Flex';
import Paragraph from '~/components/Paragraph';

const StyledBox = styled(Box)`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const StyledParagraphSmall = styled(ReactMarkdown)`
  margin-top: 0;
  font-size: ${p => p.theme.fontSizes[2]};
  p {
    margin-bottom: 0 !important;
  }
  a {
    text-decoration: none;
    border-bottom: 1px solid ${p => p.c[0]};
    color: ${p => p.c[0]};
    transition: all ${p => p.theme.times[1]} ease-in-out;

    &:hover {
      opacity: 0.5;
      transition: all ${p => p.theme.times[1]} ease-in-out;
    }
  }
`;

const StyledParagraph = styled(ReactMarkdown)`
  margin-top: 0;
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: 150%;

  p {
    margin-top: 0;
  }

  a {
    text-decoration: none;
    border-bottom: 1px solid ${p => p.c[0]};
    color: ${p => p.c[0]};
    transition: all ${p => p.theme.times[1]} ease-in-out;

    &:hover {
      opacity: 0.5;
      transition: all ${p => p.theme.times[1]} ease-in-out;
    }
  }
`;

const StyledHeadline = styled.h4`
  margin-bottom: 0;
  font-family: ${p => p.theme.fonts.headline};
`;

const Title = styled.h2`
  font-family: 'Mier A Bold';
  font-size: ${p => p.theme.fontSizes[4]};
  margin-top: 5px;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  font-family: 'Mier A Regular';
`;

const StyledList = styled(List)`
  text-align: left;
`;

const Cv = p => {
  const { timeout } = p;
  const activities = useStoreState(state => state.activities);
  const color = useStoreState(state => state.color.color);
  console.log(color);

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <>
          <Title>Activities</Title>
          <StyledBox
            state={state}
            sx={{
              display: 'grid',
              gridGap: 4,
              mb: ['40px', '120px'],
              gridTemplateColumns: [
                'repeat(auto-fit, minmax(280px, 1fr))',
                'repeat(auto-fit, minmax(350px, 1fr))',
                'repeat(auto-fit, minmax(400px, 1fr))',
              ],
            }}
          >
            {activities.map(activity => {
              return (
                <div>
                  <StyledParagraphSmall c={color}>
                    {activity.duration}
                  </StyledParagraphSmall>
                  <Title>{activity.title}</Title>
                  <StyledParagraph
                    c={color}
                    source={activity.context}
                  ></StyledParagraph>
                  <StyledParagraphSmall
                    c={color}
                    source={activity.description}
                  ></StyledParagraphSmall>
                </div>
              );
            })}
          </StyledBox>
        </>
      )}
    </Transition>
  );
};

export default Cv;
