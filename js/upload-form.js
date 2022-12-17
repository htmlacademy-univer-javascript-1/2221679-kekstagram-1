import { scaleValue } from './scale.js';
import { getRequest } from './server-data.js';
import { uploadSuccessfully, uploadErrored } from './upload-messages.js';
import { setDefaultFilter } from './effects.js';
import { keyIsEscape } from './utils.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadControl = document.querySelector('.img-upload__start');
const editForm = document.querySelector('.img-upload__overlay');
const editFormCloseButton = editForm.querySelector('.img-upload__cancel');
const imageElement = editForm.querySelector('.img-upload__preview');
const submitButton = editForm.querySelector('.img-upload__submit');

const closeForm = () => {
  editForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  submitButton.disabled = false;
};

const closeFormWithDefaultSettings = () =>  {
  closeForm();
  setDefaultFilter();
  editForm.querySelector('.text__hashtags').value = '';
  editForm.querySelector('.text__description').value = '';
};

const onDocumentEscKeyDown  = (evt) => {
  if (keyIsEscape && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    closeForm();
    document.querySelector('#upload-file').value = '';
    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

editFormCloseButton.onclick = () => {
  closeForm();
  document.querySelector('#upload-file').value = '';

  document.removeEventListener('keydown', onDocumentEscKeyDown);
};

uploadControl.onchange = () => {
  editForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  scaleValue.value = '100%';
  imageElement.style = `transform: scale(${1})`;

  document.addEventListener('keydown', onDocumentEscKeyDown);
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  submitButton.disabled = true;
  getRequest(uploadSuccessfully, uploadErrored, 'POST', formData)();
});

export { closeForm, closeFormWithDefaultSettings };
