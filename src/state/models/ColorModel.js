import { action } from 'easy-peasy';
import { getRandomInt } from '~/utils';

const ColorModel = {
  default: ['#121337', '#FAFAFB', '#F5F6F7'],
  color: ['#121337', '#FAFAFB', '#F5F6F7'],
  setColor: action((state, payload) => {
    state.color = payload;
  }),
};

export default ColorModel;
