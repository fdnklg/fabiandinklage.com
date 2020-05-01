import { action } from 'easy-peasy';
import { getRandomInt } from '~/utils';

const ColorModel = {
  default: ['#121337', '#F2F2F4'],
  color: ['#121337', '#F2F2F4'],
  setColor: action((state, payload) => {
    state.color = payload;
  }),
};

export default ColorModel;
