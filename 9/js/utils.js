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

export {getRandomInteger, getNonExistenObject};
