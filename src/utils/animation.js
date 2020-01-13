export const opacityFromState = state => {
  switch (state) {
    case "entering":
      return 0;
    case "entered":
      return 1;
    case "exiting":
      return 0;
    case "exited":
      return 0;
    default:
      return 0;
  }
};

export default {
  opacityFromState
};