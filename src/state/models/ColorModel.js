import { action } from 'easy-peasy';
import { getRandomInt } from '~/utils';

const ColorModel = {
  color: ['#121337', '#fff'],
  setColor: action((state, payload) => {
    state.color = payload;
  }),
};

export default ColorModel;
