import { action } from 'easy-peasy';
import { getRandomInt } from '~/utils';

const ColorModel = {
  color: ['#fff', '#000'],
  setColor: action((state, payload) => {
    const modes = [['#000', '#fff'], ['#fff', '#000'], ['#fff', '#9C711F'], ['#fff', '#EF4100'], ['#EF4100', '#fff']];
    const randomSelect = getRandomInt(0, modes.length - 1);
    state.color = modes[randomSelect];
  }),
};

export default ColorModel;
