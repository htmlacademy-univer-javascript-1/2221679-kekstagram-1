import {createdPictures} from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureItemTemplate = pictureTemplate.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const fragment = new DocumentFragment;

const createPictureItem = (item) => {
  const newPicture = pictureItemTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = item.url;
  newPicture.querySelector('.picture__likes').textContent = item.likes;
  newPicture.querySelector('.picture__comments').textContent = item.comments.length;
  return newPicture;
};


const addPictureItemsToFragment = (pictures) => {
  for (const item of pictures) {
    fragment.appendChild(createPictureItem(item));
  }
};

const showPictures = () => {
  addPictureItemsToFragment(createdPictures);
  picturesList.appendChild(fragment);
};

showPictures();