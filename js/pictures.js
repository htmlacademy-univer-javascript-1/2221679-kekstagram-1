import { onPictureClick } from './full-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const picturesItems = [];

const createPictureItem = (item) => {
  const newPicture = pictureTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = item.url;
  newPicture.querySelector('.picture__likes').textContent = item.likes;
  newPicture.querySelector('.picture__comments').textContent = item.comments.length;

  onPictureClick(newPicture, item);

  return newPicture;
};

const deleteAllPictures = () => {
  const pictures = picturesList.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picturesList.removeChild(picture);
  });
};

const showPictures = (pictures) => {
  deleteAllPictures();
  const fragment = new DocumentFragment;
  pictures.forEach((picture) => fragment.appendChild(picture));
  picturesList.appendChild(fragment);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const loadPictures = (pictures) => {
  pictures.forEach((picture) => picturesItems.push(createPictureItem(picture)));
  showPictures(picturesItems);
};


export { loadPictures, showPictures, picturesItems };
