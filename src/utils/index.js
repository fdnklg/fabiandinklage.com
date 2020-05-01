export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const compare = (a, b) => {
  if (a.year < b.year) {
    return 1;
  }
  if (a.year > b.year) {
    return -1;
  }
  return 0;
};

export function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

export const piwik = (_paq) => {
  const u = "https://matomo.fabiandinklage.com/matomo/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '1']);
  let d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; 
  g.async=true; 
  g.defer=true; 
  g.src=u+'matomo.js'; 
  s.parentNode.insertBefore(g,s);

  return _paq;
}

export default {
  getRandomInt,
  getPosition,
  compare,
  piwik
};
