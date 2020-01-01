import { action } from 'easy-peasy';
import { getRandomInt } from '~/utils';

const ColorModel = {
  color: ['#fff', '#000'],
  setColor: action((state, payload) => {
    state.color = payload;
  }),
};

export default ColorModel;
