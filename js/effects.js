const sliderOptions = {
  chrome: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1
  },
  sepia: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1
  },
  marvin: {
    MIN: 0,
    MAX: 100,
    STEP: 1
  },
  phobos: {
    MIN: 0,
    MAX: 3,
    STEP: 0.1
  },
  heat: {
    MIN: 1,
    MAX: 3,
    STEP: 0.1
  }
};

const editForm = document.querySelector('.img-upload__overlay');
const effectsList = editForm.querySelector('.effects__list');
const imageElement = editForm.querySelector('.img-upload__preview').children[0];
const sliderField = editForm.querySelector('.img-upload__effect-level');
const sliderElement = editForm.querySelector('.effect-level__slider');
const effectLevel = editForm.querySelector('.effect-level__value');

const effects = {
  none: () => {
    sliderField.classList.add('visually-hidden');
    return '';
  },
  chrome: () => {
    sliderField.classList.remove('visually-hidden');
    return `grayscale(${effectLevel.value})`;
  },
  sepia: () => {
    sliderField.classList.remove('visually-hidden');
    return `sepia(${effectLevel.value})`;
  },
  marvin: () => {
    sliderField.classList.remove('visually-hidden');
    return `invert(${effectLevel.value}%)`;
  },
  phobos: () => {
    sliderField.classList.remove('visually-hidden');
    return `blur(${effectLevel.value}px)`;
  },
  heat: () => {
    sliderField.classList.remove('visually-hidden');
    return `brightness(${effectLevel.value})`;
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1
  },
  start: 1,
  step: 1,
  connect: 'lower'
});

sliderField.classList.add('visually-hidden');
let currentEffect = '';

const setSliderOptions = (effect) => {
  const options = sliderOptions[effect];
  sliderElement.noUiSlider.updateOptions({range: {min: options.MIN, max: options.MAX}, start: options.MAX, step: options.STEP});
  effectLevel.value = options.MAX;
};

const setDefaultFilter = () => {
  const defaultRadio = effectsList.querySelector('#effect-none');
  defaultRadio.checked = true;

  if (currentEffect !== '') {
    imageElement.classList.remove(currentEffect);
  }

  currentEffect = '';

  imageElement.style.filter = effects['none']();
};

const onEffectsListClick = (evt) => {
  let target = evt.target;

  if (target.classList.contains('effects__radio')) {
    return;
  }

  if (target.classList.contains('effects__label')) {
    target = target.querySelector('span');
  }

  if (target.classList.contains('effects__preview')) {
    if (currentEffect !== '') {
      imageElement.classList.remove(currentEffect);
    }
  }

  currentEffect = target.classList[1];
  imageElement.classList.add(currentEffect);

  setSliderOptions(currentEffect.replace('effects__preview--', ''));
  imageElement.style.filter = effects[currentEffect.replace('effects__preview--', '')]();
};

const onSliderChange = () => {
  effectLevel.value = sliderElement.noUiSlider.get();
  imageElement.style.filter = effects[currentEffect.replace('effects__preview--', '')]();
};

effectsList.addEventListener('click', onEffectsListClick);
sliderElement.noUiSlider.on('change', onSliderChange);

export {setDefaultFilter};
