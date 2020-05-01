import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Box, Text, Image, Button } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import List from '~/components/List';
import Flex from '~/components/Flex';
import Title from '~/components/Title';
import Paragraph from '~/components/Paragraph';
import { content } from '~/data';

const StyledBox = styled(Box)``;

const StyledParagraphSmall = styled(ReactMarkdown)`
  letter-spacing: .25px;
  font-size: ${p => p.theme.fontSizes[2]};
  opacity: .66;
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

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

const StyledParagraph = styled(ReactMarkdown)`
  margin-top: 0;
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: 150%;
  opacity: ${p => p.opacity};

  p {
    margin-top: 0;
    margin-bottom: 10px;
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

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;

const StyledTitle = styled(ReactMarkdown)`
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: 150%;
  font-family: 'Mier A Bold';

  p {
    margin-top: 0;
    margin-bottom: 0px;
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

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  width: fit-content;
  align-self: center;
  padding-top: 7px;
  margin: 0 10px 10px 0;
  padding-bottom: 10px;
  background: ${p => p.active ? p.c[0] : 'none'};
  border: 1px solid ${p => p.c[0]};
  font-size: ${p => p.theme.fontSizes[4]};
  color: ${p => p.active ? p.c[1] : p.c[0] };
  outline: none;
  border-radius: 30px;
  text-decoration: none;
  transition: all ${p => p.theme.times[0]} ease-in-out;

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[2]};
    padding-bottom: 7px;
  }

  &:hover {
    opacity: .5;
    background: lighten(20, ${p => p.c[0]});
    transition: all ${p => p.theme.times[0]} ease-in-out;
  }
`;

const StyledList = styled(List)`
  text-align: left;
`;

const StyledButtonWrapper = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: ${p => p.theme.sizes.mobile}) {
    padding-bottom: 20px;
    justify-content: flex-start;
  }
`;

const CvWrapper = styled.div`
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

  transition: all ${p => p.theme.times[0]} ease-in-out;
`;


const Cv = p => {
  const { timeout } = p;
  const base = useStoreState(state => state.base);
  const activities = content[base].activities;
  const [ filteredActivities, setFilteredActivities ] = useState(activities);
  const color = useStoreState(state => state.color.color);
  const isPrerendering = useStoreState(state => state.layout.isPrerendering);
  const [filteredTypes, setFilteredTypes] = useState(['Experience']);

  let filterArr = [];
  activities.forEach(activity => {
    if (!filterArr.includes(activity.type)) {
      filterArr.push(activity.type)
    }
  })

  useEffect(() => {
    let filtered = activities.filter(activity => {
      return filteredTypes.includes(activity.type)
    });

    setFilteredActivities(filtered);
  }, [filteredTypes])

  const toggleArrayItem = (a, v) => {
    var i = a.indexOf(v);
    if (i === -1) {
      a.push(v);
      setFilter(a);
    } else {
      a.splice(i,1);
      setFilter(a);
    }
  }

  const handleClick = (value) => {
    setFilteredTypes([value]);
  }

  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <CvWrapper state={state} isPrerendering={isPrerendering}>
          <Title timeout={timeout} source='Resumé' color={color} />
          <StyledButtonWrapper>
            {filterArr.map(f => {
              const active = filteredTypes.includes(f);
              return (
                <StyledButton
                  active={active}
                  c={color}
                  onClick={() => handleClick(f)}
                >
                  {f}
                </StyledButton>
              )
            })}
          </StyledButtonWrapper>
          <StyledBox
            sx={{
              display: 'grid',
              gridGap: [2,3,4,3],
              mb: ['40px', '100px'],
              gridTemplateColumns: [
                'repeat(auto-fit, minmax(300px, 1fr))',
              ],
            }}
          >
            {filteredActivities.map(activity => {
              return (
                <div>
                  <StyledParagraphSmall 
                    c={color}
                    source={`${activity.duration} / ${activity.type}`}
                  ></StyledParagraphSmall>
                  <StyledTitle
                    c={color}
                    source={activity.title}
                  ></StyledTitle>
                  <StyledParagraph
                    c={color}
                    source={activity.context}
                  ></StyledParagraph>
                  <StyledParagraph
                    c={color}
                    opacity={.66}
                    source={activity.description}
                  ></StyledParagraph>
                </div>
              );
            })}
          </StyledBox>
        </CvWrapper>
      )}
    </Transition>
  );
};

export default Cv;
