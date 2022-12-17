import { getRequest } from './server-data.js';
import { loadErrored } from './upload-messages.js';
import { addPictureEventHandler } from './full-picture.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureItemTemplate = pictureTemplate.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const fragment = new DocumentFragment;

const createPictureItem = (item) => {
  const newPicture = pictureItemTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = item.url;
  newPicture.querySelector('.picture__likes').textContent = item.likes;
  newPicture.querySelector('.picture__comments').textContent = item.comments.length;

  addPictureEventHandler(newPicture, item);

  return newPicture;
};

const showPictures = (pictures) => {
  for (const item of pictures) {
    fragment.appendChild(createPictureItem(item));
  }
  picturesList.appendChild(fragment);
};

getRequest(showPictures, loadErrored, 'GET')();

export {picturesList};
