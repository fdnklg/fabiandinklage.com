import { action } from 'easy-peasy';

const LayoutModel = {
  layout: 'Grid',
  setLayout: action((state, payload) => {
    state.layout = payload;
  }),
  isPrerendering: false,
  setIsPrerendering: action((state, payload) => {
    state.isPrerendering = payload;
  }),
};

export default LayoutModel;
