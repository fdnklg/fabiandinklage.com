import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { Box, Text, Image, Button } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState } from '~/utils/animation';

import List from '~/components/List';
import Flex from '~/components/Flex';
import Paragraph from '~/components/Paragraph';

const StyledBox = styled(Box)`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
`;

const StyledParagraphSmall = styled(ReactMarkdown)`
  letter-spacing: .25px;
  font-size: ${p => p.theme.fontSizes[2]};
  ${'' /* font-family: 'Mier A Bold'; */}
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
    margin-bottom: 20px;
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

const StyledSectionTitle = styled(ReactMarkdown)`
  font-family: 'Mier A Bold';
  margin: 0 auto;
  p {
    font-size: ${p => p.theme.fontSizes[5]};
    margin-bottom: 20px;
  }
  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    margin: initial;

    p {
      font-size: ${p => p.theme.fontSizes[3]};
      margin-bottom: 10px;
    }
  }
`;

const StyledTitle = styled(ReactMarkdown)`
  font-size: ${p => p.theme.fontSizes[4]};
  line-height: 150%;
  font-family: 'Mier A Bold';

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

const StyledButton = styled(Button)`
  cursor: pointer;
  width: fit-content;
  align-self: center;
  padding-top: 4px;
  margin: 0 10px 10px 0;
  padding-bottom: 10px;
  background: ${p => p.active ? p.c[0] : 'none'};
  border: 1px solid ${p => p.c[0]};
  font-size: ${p => p.theme.fontSizes[3]};
  color: ${p => p.active ? p.c[1] : p.c[0] };
  outline: none;
  border-radius: 6px;
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
  margin: 0 auto;

  @media screen and (max-width: ${p => p.theme.sizes.tablet}) {
    padding-bottom: 20px;
    margin: initial;
  }
`;


const Cv = p => {
  const { timeout } = p;
  const activities = useStoreState(state => state.activities);
  const [ filteredActivities, setFilteredActivities ] = useState(activities);
  const color = useStoreState(state => state.color.color);

  let filterArr = [];
  activities.forEach(activity => {
    if (!filterArr.includes(activity.type)) {
      filterArr.push(activity.type)
    }
  })

  const [ filterState, setFilter ] = useState(filterArr);

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

  const handleClick = (stateArr, value) => {
    toggleArrayItem(stateArr, value);
    stateArr = [value];
    let filtered = activities.filter(activity => {
      return filterState.includes(activity.type)
    });
    setFilteredActivities(filtered)
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
        <>
          <StyledSectionTitle timeout={625} source='Activities:' color={color} />
          <StyledButtonWrapper>
            {filterArr.map(filter => {
              const active = filterState.includes(filter);
              return (
                <StyledButton
                  active={active}
                  c={color}
                  onClick={() => handleClick(filterState, filter)}
                >
                  {filter}
                </StyledButton>
              )
            })}
          </StyledButtonWrapper>
          <StyledBox
            state={state}
            sx={{
              display: 'grid',
              gridGap: [2,3,4,5],
              mb: ['40px', '120px'],
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
                    opacity={.5}
                    source={activity.description}
                  ></StyledParagraph>
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