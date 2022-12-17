import { createCommentItem } from './commets.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const comments = bigPicture.querySelector('.social__comments');

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

const onDocumentEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');

    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

const addPictureEventHandler = (picture, pictureData) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureData.url;
    bigPicture.querySelector('.likes-count').textContent = pictureData.likes;
    bigPicture.querySelector('.comments-count').textContent = pictureData.comments.length;
    bigPicture.querySelector('.social__caption').textContent = pictureData.description;

    comments.innerHTML = '';
    pictureData.comments.forEach((comment) => {
      comments.appendChild(createCommentItem(comment));
    });

    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');

    document.addEventListener('keydown', onDocumentEscKeyDown);
  });
};

export {addPictureEventHandler};
