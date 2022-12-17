const DELAY = 500;

const getRandomInteger = (min, max) => {
  if (min > max ){
    [min, max] = [max, min];
  }
  if (min < 0) {
    return -1;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getNonExistenObject = (existingObjects, min, max) => {
  let id = getRandomInteger(min, max);
  while (existingObjects.includes(id)){
    id = getRandomInteger(min, max);
  }
  existingObjects.push(id);
  return id;
};

const keyIsEscape = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

function shuffle(array) {
  array = array.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export {getRandomInteger, getNonExistenObject, keyIsEscape, debounce, shuffle};
