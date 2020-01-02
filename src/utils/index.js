export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const compare = (a, b) => {
  if ( a.year < b.year ){
    return 1;
  }
  if ( a.year > b.year ){
    return -1;
  }
  return 0;
}

export default {
  getRandomInt,
  compare
}