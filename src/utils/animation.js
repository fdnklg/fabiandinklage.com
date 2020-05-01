export const opacityFromState = state => {
  switch (state) {
    case 'entering':
      return 0;
    case 'entered':
      return 1;
    case 'exiting':
      return .5;
    case 'exited':
      return 0;
    default:
      return 0;
  }
};

export const positionFromState = state => {
  switch (state) {
    case 'entering':
      return 'translateY(10px)';
    case 'entered':
      return 'translateY(0px)';
    case 'exiting':
      return 'translateY(10px)';
    case 'exited':
      return 'translateY(10px)';
    default:
      return 'translateY(10px)';
  }
};

export const displayFromState = state => {
  switch (state) {
    case 'entering':
      return 'block';
    case 'entered':
      return 'block';
    case 'exiting':
      return 'none';
    case 'exited':
      return 'none';
    default:
      return 'none';
  }
};

export default {
  opacityFromState,
  positionFromState,
  displayFromState
};
