const MAX_SCALE = 100;
const MIN_SCALE = 0;
const SCALE_STEP = 25;

const uploadForm = document.querySelector('.img-upload__form');
const scaleField = uploadForm.querySelector('.img-upload__scale');
const scaleValue = scaleField.querySelector('.scale__control--value');
const smallerButton = scaleField.querySelector('.scale__control--smaller');
const biggerButton = scaleField.querySelector('.scale__control--bigger');
const imageElement = uploadForm.querySelector('.img-upload__preview');

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value.slice(0, -1), 10);
  const decreasedValue = currentValue + SCALE_STEP > MAX_SCALE ? MAX_SCALE : currentValue + SCALE_STEP;
  scaleValue.value = `${decreasedValue}%`;

  imageElement.style = `transform: scale(${decreasedValue / 100})`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value.slice(0, -1), 10);
  const decreasedValue = currentValue - SCALE_STEP < MIN_SCALE ? MIN_SCALE : currentValue - SCALE_STEP;
  scaleValue.value = `${decreasedValue}%`;

  imageElement.style = `transform: scale(${decreasedValue / 100})`;
};

smallerButton.addEventListener('click', onSmallerButtonClick);

biggerButton.addEventListener('click', onBiggerButtonClick);

export {scaleValue};
