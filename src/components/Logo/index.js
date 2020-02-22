import React from 'react';
import styled from 'styled-components';
import LogoSrc from '!file-loader!~/../public/images/avatar.svg';
import { Box } from 'rebass/styled-components';
import { useStoreState } from 'easy-peasy';

const StyledSvg = styled.svg`
  width: 100%;
`;

const Logo = () => {
  const color = useStoreState(state => state.color.color)[0];
  return (
    <Box
      src={LogoSrc}
      mr={3}
      sx={{
        width: ['35px', '35px', '40px'],
      }}
    >
      <StyledSvg width="42px" height="58px" viewBox="0 0 42 58">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="avatar"
            transform="translate(-1.000000, 0.000000)"
            fillRule="nonzero"
            fill={color}
          >
            <circle id="eyeR" cx="29" cy="26.8" r="1.6"></circle>
            <path
              d="M33.334283,25.7828585 C33.21025,25.5347924 32.9631775,25.2133005 32.560573,24.9049225 C31.7297133,24.2685194 30.5755897,23.979319 29.096075,24.1985064 C27.9806791,24.3268358 27.091635,24.6629957 26.430144,25.1514385 C25.8631243,25.5701238 25.5554121,26.0163915 25.4321637,26.361487 C25.3004367,26.7303228 25.4926513,27.1361092 25.861487,27.2678363 C26.2303228,27.3995633 26.6361092,27.2073487 26.7678363,26.838513 C26.7674222,26.8396724 26.7878736,26.7987361 26.8365404,26.7281559 C26.9347748,26.5856888 27.0769242,26.436908 27.2726272,26.2924015 C27.7290178,25.9554043 28.3830009,25.7081242 29.2812857,25.6044759 C30.4077437,25.4379649 31.1750878,25.6302461 31.6981376,26.0308799 C31.9144631,26.1965761 32.0317253,26.3491582 32.065717,26.4171415 C32.2408694,26.7674464 32.6668367,26.9094355 33.0171415,26.734283 C33.3674464,26.5591306 33.5094355,26.1331633 33.334283,25.7828585 Z"
              id="Shape"
            ></path>
            <circle id="eyeL" cx="14.4" cy="26.7" r="1.4"></circle>
            <path
              d="M17.6687216,26.2639806 C17.5558457,25.9441655 17.2954068,25.5225025 16.8285074,25.1154621 C16.0884368,24.4702723 15.0506052,24.09085 13.7,24.09085 C12.3836231,24.09085 11.3746825,24.3729194 10.6441344,24.8599515 C10.1632882,25.1805156 9.88340968,25.5270319 9.7561206,25.8028249 C9.59199532,26.1584297 9.74722012,26.5797541 10.1028249,26.7438794 C10.4584297,26.9080047 10.8797541,26.7527799 11.0438794,26.3971751 C11.0665903,26.3479681 11.1804618,26.2069844 11.4308656,26.0400485 C11.9190675,25.7145806 12.6538769,25.50915 13.7,25.50915 C14.7118948,25.50915 15.4178132,25.7672277 15.8964926,26.1845379 C16.1608432,26.4149975 16.2941543,26.6308345 16.3312784,26.7360194 C16.4616283,27.1053441 16.8666946,27.2990715 17.2360194,27.1687216 C17.6053441,27.0383717 17.7990715,26.6333054 17.6687216,26.2639806 Z"
              id="Shape"
            ></path>
            <path
              d="M25.0520491,45.2502421 C24.4881462,45.7097186 23.8125526,45.9962404 23.0398235,46.1298702 C22.0086872,46.308187 20.8785108,46.2069477 19.7768511,45.9261498 C19.3491863,45.817144 19.0317041,45.7096989 18.8660679,45.6426557 C18.5030267,45.4957104 18.0896009,45.6708908 17.9426557,46.0339321 C17.7957104,46.3969733 17.9708908,46.8103991 18.3339321,46.9573443 C18.5553495,47.0469657 18.9322433,47.1745174 19.4265461,47.3005083 C20.7054082,47.6264726 22.0251443,47.7446924 23.2815062,47.5274268 C24.2830153,47.3542335 25.1842915,46.9719989 25.9479509,46.3497579 C26.2515738,46.1023615 26.2971543,45.655672 26.0497579,45.3520491 C25.8023615,45.0484262 25.355672,45.0028457 25.0520491,45.2502421 Z"
              id="Shape"
            ></path>
            <path
              d="M8.5,13 L11.2,8.6 C11.5,8 12.1,7.7 12.8,7.7 L30.9,7.8 C31.8,7.8 32.6,8.3 33,9.1 L35.4,13.9 L37.1,17.7 C37.4,18.3 37.5,19 37.6,19.7 L38,29 L38.3,27.6 C38.5,25.8 38.7,24 38.9,22.1 C39.8,12.8 33.8,7.4 33.8,7.4 C28,2 23,2.3 23,2.3 L21,2.3 C21,2.3 15.9,2 10.2,7.4 C10.2,7.4 4.2,12.8 5.1,22.1 C5.2,23.2 5.6,24.6 5.7,25.7 L6.3,19.1 C6.4,18.4 6.5,17.8 6.8,17.2 L8.5,13 Z"
              id="Shape"
              opacity="0.4"
            ></path>
            <path
              d="M40.2,23.5 C40.2,23.1 40.3,22.8 40.3,22.4 C41.3,12.5 35.1,6.8 34.7,6.4 C28.7,0.8 23.4,0.8 22.9,0.8 L20.9,0.8 C20.5,0.8 15.1,0.8 9.1,6.4 C8.8,6.7 2.6,12.5 3.5,22.4 C3.5,22.8 3.6,23.1 3.6,23.5 C2,23.8 0.8,25.3 1,27 L1.6,31.9 C1.8,33.5 3.1,34.7 4.8,34.7 L4.9,34.7 C5.6,39.6 6.2,42.9 6.2,43 L6.2,43.1 C6.8,45.1 8.1,47.1 8.6,47.7 L11.7,52.2 C13.6,55 18.2,57.9 20.7,57.9 L20.7,57.9 L23.8,57.9 L23.8,57.9 C25.8,57.9 30.5,55 32.4,52.2 L35.3,47.8 L35.2,47.8 C35.6,47.1 36.9,45.1 37.5,43.2 L37.5,43.1 C37.5,43 38.1,39.8 38.7,34.8 C38.8,34.8 38.9,34.9 39,34.9 L39,34.9 C40.6,34.9 42,33.6 42.2,32 L42.8,27.2 C43.1,25.4 41.9,23.7 40.2,23.5 Z M3.1,31.7 L2.5,26.8 C2.4,25.9 3,25.1 3.8,24.9 C4.1,27.9 4.4,30.7 4.8,33.2 C3.9,33.2 3.2,32.6 3.1,31.7 Z M5.8,25.8 C5.7,24.6 5.6,23.5 5.5,22.3 C4.7,13.3 10.4,8 10.5,7.9 L10.5,7.9 C12.7,5.8 15,4.4 17.4,3.6 C19.2,3 20.5,2.9 20.9,2.9 L21,2.9 L23.1,2.9 L23.1,2.9 L23.2,2.9 C23.5,2.9 24.8,2.9 26.7,3.6 C29.1,4.4 31.4,5.9 33.6,7.9 L33.6,7.9 C33.7,8 39.4,13.3 38.6,22.3 C38,28.9 37.1,35 36.5,38.8 C36.3,40 35.8,41.2 35,42.2 L32.9,44.7 C32.4,45.3 32,45.9 31.7,46.6 L31,48.4 C30.6,49.4 29.6,50 28.5,49.8 C27.6,49.7 26.7,50 26.1,50.7 L25.6,51.3 C24.9,52.2 23.9,52.9 22.7,53.1 C22.3,53.2 21.8,53.2 21.3,53.2 C20.2,53.1 19.2,52.5 18.5,51.6 L18.2,51.2 C17.4,50.1 16,49.6 14.7,49.8 C14.1,49.9 13.4,49.6 13.2,48.9 L12.4,46.8 C12,45.9 11.5,45.1 10.9,44.3 L8.5,41.5 C8.1,41 7.9,40.5 7.8,39.9 C7.5,38 7.1,35.2 6.7,32 L5.8,25.8 Z M41.5,26.8 L40.9,31.6 C40.8,32.5 40,33.2 39.2,33.2 L39.2,33.2 L39,33.2 C39.3,30.7 39.7,27.9 40,24.9 C40.4,25 40.8,25.2 41.1,25.5 C41.4,25.9 41.5,26.4 41.5,26.8 Z"
              id="Shape"
            ></path>
            <path
              d="M20.8,42.1 C21.5,42 22.2,42 22.8,42.1 L26.2,42.7 C26.4,42.7 27,42.9 27.5,43.1 C28.3,43.3 29.2,43.7 29.9,44.1 L30.1,44.2 C30.5,44.3 30.8,43.9 30.7,43.4 L30.7,43.4 C30.5,42.8 30.1,42.4 29.6,42.2 L27.1,40.9 C26.8,40.8 26.5,40.6 26.2,40.5 L23.6,39.3 C21.4,38.4 19.2,39.8 17.2,40.5 C16.9,40.6 16.7,40.7 16.4,40.9 L13.9,42.2 C13.4,42.4 13,42.8 12.8,43.4 L12.8,43.4 C12.7,43.8 13,44.3 13.4,44.2 L13.8,44 C14.4,43.7 15.1,43.4 15.7,43.2 C16.4,43 17.1,42.8 17.3,42.8 C17.7,42.7 19.4,42.3 20.8,42.1 Z"
              id="Shape"
            ></path>
            <path
              d="M17.7789141,35.9810023 L18.9789141,37.2810023 C19.5183858,37.8212753 20.4492119,37.9682479 21.1171415,37.634283 L21.5171415,37.434283 C21.7174963,37.3341057 22.0825037,37.3341057 22.2828585,37.434283 L22.6828585,37.634283 C23.3507881,37.9682479 24.2816142,37.8212753 24.8014448,37.3014448 L26.1381282,36.2576176 C26.4460919,36.0156462 26.4995891,35.5698356 26.2576176,35.2618718 C26.0156462,34.9539081 25.5698356,34.9004109 25.2618718,35.1423824 L23.8618718,36.2423824 C23.7121358,36.3849747 23.4412119,36.4277521 23.3171415,36.365717 L22.9171415,36.165717 C22.3174963,35.8658943 21.4825037,35.8658943 20.8828585,36.165717 L20.4828585,36.365717 C20.3587881,36.4277521 20.0878642,36.3849747 20.0014448,36.2985552 L18.8210859,35.0189977 C18.5554356,34.7312099 18.1067854,34.7132639 17.8189977,34.9789141 C17.5312099,35.2445644 17.5132639,35.6932146 17.7789141,35.9810023 Z"
              id="Shape"
            ></path>
            <path
              d="M8.3,21.5 L7.9,19.7 L15.1,18 L15.6,18 L19,19 L18.5,20.8 L15.3,19.9 L8.3,21.5 Z"
              id="Shape"
            ></path>
            <path
              d="M35.6,22.2 L28.6,20.2 L25.2,20.8 L24.9,18.9 L28.5,18.3 L28.9,18.3 L36.1,20.4 L35.6,22.2 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </StyledSvg>
    </Box>
  );
};

export default Logo;
