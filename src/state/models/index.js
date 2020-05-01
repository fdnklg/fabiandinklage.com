/* eslint-disable */
import LayoutModel from './LayoutModel';
import ColorModel from './ColorModel';
import Content from '~/data';
import { action } from 'easy-peasy';


export default {
  layout: LayoutModel,
  color: ColorModel,
  base: 'de',
  setBase: action((state, payload) => {
    state.base = state.base === 'en' ? 'de' : 'en';
  }),
  ...Content,
};
