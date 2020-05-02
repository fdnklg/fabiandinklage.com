import { action } from 'easy-peasy';
import { getRandomInt } from '~/utils';

const ColorModel = {
  default: ['#121337', '#F2F2F4', '#E6E6EA'],
  color: ['#121337', '#F2F2F4', '#E6E6EA'],
  setColor: action((state, payload) => {
    state.color = payload;
  }),
};

export default ColorModel;
