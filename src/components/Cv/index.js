import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Box, Text, Image, Button } from 'rebass/styled-components';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import Title from '~/components/Title';
import { content } from '~/data';

const StyledListWrapper = styled.div`
  opacity: ${props => opacityFromState(props.state)};
  transition: all ${p => p.theme.times[1]} ease-in-out;
  font-size: ${p => p.theme.fontSizes[3]};
  margin-bottom: 60px;
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

const StyledTD = styled.td`
  text-align: ${p => (p.type === 'last' ? 'end' : 'start')};
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[2]} 0;
  margin-top: ${p => (p.type === 'last' ? '10px' : '0px')};
  margin-top: 3px;
  vertical-align: top;
  width: ${p => p.width};
  letter-spacing: 0.5px;
  font-size: 16px;
  text-align: ${p => p.align};
  padding-right: 20px;

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    text-align: left;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDescription = styled.span`
  font-family: ${p => p.theme.fonts.body};
  padding: ${p => p.theme.space[1]} 0px ${p => p.theme.space[2]} 0;
  letter-spacing: 0.5px;
  width: 100%;
  opacity: .66;
`;

const TitleSpan = styled.span`
  font-family: ${p => p.theme.fonts.headline};
`;

const StyledTitle = styled.td`
  font-family: ${p => p.theme.fonts.headline};
  text-align: ${p => (p.type === 'last' ? 'end' : 'start')};
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
  transition: opacity ${p => p.theme.times[0]} ease-in-out;
  letter-spacing: 0.5px;

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[3]};
    text-align: left;
  }

  &:hover {
    opacity: 0.5;
    transition: all ${p => p.theme.times[1]} ease-in-out;
  }
`;

const StyledTR = styled.tr`
  border-top: ${p => (p.border ? '1px solid' + p.c[0] : 'none')};
  opacity: ${p => p.highlighted ? 1 : .33};

  td {
    padding-top: ${p => (p.newYear ? p.theme.space[4] : '15px')};
    padding-bottom: ${p => (p.lastItemOfYear ? p.theme.space[4] : '15px')};
    font-size: ${p => p.theme.fontSizes[4]};
    transition: all ${p => p.theme.times[0]} ease-in-out;
    color: ${p => p.c[0]};

    @media (max-width: ${p => p.theme.sizes.desktop}) {
      padding-top: ${p => (p.newYear ? p.theme.space[3] : '11px')};
      padding-bottom: ${p => (p.lastItemOfYear ? p.theme.space[3] : '11px')};
    }

    @media (max-width: ${p => p.theme.sizes.tablet}) {
      padding-top: ${p => (p.newYear ? p.theme.space[3] : '8px')};
      padding-bottom: ${p => (p.lastItemOfYear ? p.theme.space[3] : '8px')};
    }
  }

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[4]};
    td {
      padding-right: 15px;
      font-size: ${p => p.theme.fontSizes[3]};
    }
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
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

const CVList = p => {
  const { timeout } = p;
  const base = useStoreState(state => state.base);
  const color = useStoreState(state => state.color.color);
  let activities = content[base].activities;
  let title = content[base].title;
  let observed = null;
  const isPrerendering = useStoreState(state => state.layout.isPrerendering);
  const [ filteredActivities, setFilteredActivities ] = useState(activities);
  const all = base === 'en' ? 'All' : 'Alle';
  const [filteredTypes, setFilteredTypes] = useState([all]);
  activities = activities.sort((a,b) => b.date - a.date);

  let filterArr = [];
  filterArr.push(all)
  activities.forEach(activity => {
    if (!filterArr.includes(activity.type)) {
      filterArr.push(activity.type)
    }
  })

  const handleResize = (w) => {
    const boxes = document.querySelectorAll('.td-desktop');
    const mobileItems = document.querySelectorAll('.td-mobile');
    if (w < 768) {
      boxes.forEach(box => (box.style.display = `none`));
      mobileItems.forEach(box => (box.style.display = ``));
    } else {
      boxes.forEach(box => (box.style.display = ``));
      mobileItems.forEach(box => (box.style.display = `none`));
    }
  }

  const handleClick = (value) => {
    setFilteredTypes([value]);
  }

  useEffect(() => {
    if (observed) {
      handleResize(observed.offsetWidth)
      window.addEventListener('resize', () => handleResize(observed.offsetWidth))
    }
  }, [observed]);

  useEffect(() => {
    let filtered = activities.filter(activity => {
      return filteredTypes.includes(activity.type)
    });

    setFilteredActivities(filtered);

    if (filteredTypes.includes(all)) {
      setFilteredActivities(activities);
    }

    setTimeout(() => {
      handleResize(observed.offsetWidth)
    }, 50);
  }, [filteredTypes])

  return (
    <Transition
      in={true}
      timeout={0}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <StyledListWrapper
          state={state}
          ref={target => {
            if (target) {
              observed = target;
            }
          }}
        >
          <Title timeout={timeout} source={title.cv} color={color} />
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
          <StyledTable>
            <tbody>
              {filteredActivities.map((item,i) => {
                return (
                  <StyledTR
                    lastItemOfYear={activities.length - 1 === i}
                    highlighted={filteredTypes.includes(item.type) || filteredTypes.includes(all)}
                    newYear={false}
                    c={color}
                    border={true}
                    key={`tr-cv-${i}`}
                  >
                    <StyledTD width={'10%'} className="td-desktop">
                      {item.duration}
                    </StyledTD>
                    <StyledTD width={'40%'}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                      <StyledDescription className="td-mobile">{item.duration}</StyledDescription>
                      <TitleSpan>{item.title}</TitleSpan>
                      <StyledDescription className="td-mobile">{item.context}</StyledDescription>
                      <StyledDescription>{item.description}</StyledDescription>
                      </Box>
                    </StyledTD>
                    <StyledTD width={'30%'} className="td-desktop">
                      {item.context}
                    </StyledTD>
                  </StyledTR>
                )
              })}
            </tbody>
          </StyledTable>
        </StyledListWrapper>
      )}
      </Transition>
  )
}

export default CVList;