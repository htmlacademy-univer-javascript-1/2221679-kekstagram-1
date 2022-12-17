import { debounce, shuffle } from './utils.js';
import { showPictures, picturesItems } from './pictures.js';

const RANDOM_PICTURES_COUNT = 10;

const filtersForm = document.querySelector('.img-filters__form');

const filters = {
  default: () => picturesItems.slice(),
  random: () => shuffle(picturesItems).slice(0, RANDOM_PICTURES_COUNT),
  discussed: () => picturesItems.slice()
    .sort((picture1, picture2) => picture2.querySelector('.picture__comments').textContent - picture1.querySelector('.picture__comments').textContent),
};

const OnFilterButtonClick = debounce((evt) => {
  const selectedButton = evt.target;
  if (selectedButton.tagName === 'BUTTON') {
    filtersForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    selectedButton.classList.add('img-filters__button--active');
    showPictures(filters[selectedButton.id.replace('filter-', '')]());
  }
});


filtersForm.addEventListener('click', OnFilterButtonClick);
