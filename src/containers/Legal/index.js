import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import Transition from 'react-transition-group/Transition';
import { opacityFromState, positionFromState } from '~/utils/animation';

import Button from '~/components/Button';
import List from '~/components/List';
import Flex from '~/components/Flex';
import { content } from '~/data';

const StyledFlex = styled(Flex)`
  opacity: ${(props) => opacityFromState(props.state)};
  transform: ${(props) => positionFromState(props.state)};
  transition: all ${(p) => p.theme.times[1]} ease-in-out;
`;

const StyledParagraph = styled.p`
  margin-top: 0;
`;

const StyledHeadline = styled.h4`
  margin-bottom: 0;
  font-family: ${(p) => p.theme.fonts.headline};
`;

const StyledList = styled(List)`
  text-align: left;
`;

const Profile = (p) => {
  const { timeout } = p;
  const color = useStoreState((state) => state.color.color);
  const base = useStoreState((state) => state.base);
  const legal = content[base].legal;
  return (
    <Transition
      in={true}
      timeout={timeout}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {(state) => (
        <StyledFlex
          state={state}
          sx={{ textAlign: 'left', lineHeight: '1.5' }}
          py={[3, 5, 5, 6]}
          width={[1, 4 / 5, 4 / 5, 3 / 4]}
          fontSize={[3, 4, 4, 4]}
        >
          <h2>{legal.title}</h2>

          <StyledParagraph>{legal.p1}</StyledParagraph>

          <StyledList>
            {legal.li1.map((item) => (
              <li>{item}</li>
            ))}
          </StyledList>

          <StyledHeadline>Contact</StyledHeadline>

          <StyledList>
            {legal.li2.map((item) => (
              <li>{item}</li>
            ))}
          </StyledList>

          <StyledHeadline>VAT Number</StyledHeadline>

          <StyledList>
            {legal.li3.map((item) => (
              <li>{item}</li>
            ))}
          </StyledList>

          <h2>{legal.disclaimer}</h2>

          <StyledHeadline>{legal.accountability}</StyledHeadline>

          <StyledParagraph>{legal.p2}</StyledParagraph>

          <StyledHeadline>{legal.links}</StyledHeadline>

          <StyledParagraph>{legal.p4}</StyledParagraph>

          <StyledHeadline>{legal.copyright}</StyledHeadline>

          <StyledParagraph>{legal.p3}</StyledParagraph>

          {/* <StyledHeadline>Use of Matomo</StyledHeadline>

        <StyledParagraph>On this website data is collected and stored using the web analysis service software Matomo (www.matomo.org), a service of the provider InnoCraft Ltd., 150 Willis St, 6011 Wellington, New Zealand, ("Matomo") on the basis of our legitimate interest in statistical analysis of user behaviour for optimisation and marketing purposes in accordance with Art. 6 §1 (f) lit. of GDPR. From this data, anonymised user profiles can be created and evaluated for the same purpose. Cookies may be used for this purpose. Cookies are small text files that are stored locally in the cache of the Internet browser of the page visitor. The cookies enable, among other things, the recognition of the Internet browser. The data collected using Matomo technology (including your pseudonymised IP address) is processed on our servers.

        The information generated by the cookie in the anonymous user profile is not used to personally identify the visitor to this website and is not merged with personal data about the bearer of the pseudonym. If you do not agree with the storage and evaluation of this data from your visit, you can object to its subsequent storage and use at any time by mouse click. In this case, a so-called opt-out cookie is stored in your browser, which means that Matomo does not collect any session data. Please note that the complete deletion of your cookies means that the opt-out cookie will also be deleted and may have to be reactivated by you.</StyledParagraph>

        <Flex sx={{ flexDirection: 'row !important', margin: '0' }} mb={4}>
          <Button c={color} mt={[3,4]} mr={3} px={3} py={2} fontSize={[2,3]} id="piwikAjaxOptOutTrack">Track</Button>
          <Button c={color} mt={[3,4]} px={3} py={2} fontSize={[2,3]} id="piwikAjaxOptOutUntrack">Untrack</Button>
        </Flex>

        <StyledParagraph id="status">You are <span>not </span>tracked.</StyledParagraph> */}
        </StyledFlex>
      )}
    </Transition>
  );
};

export default Profile;
