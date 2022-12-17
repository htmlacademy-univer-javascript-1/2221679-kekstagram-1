import { scaleValue } from './scale.js';

const uploadControl = document.querySelector('.img-upload__start');
const editForm = document.querySelector('.img-upload__overlay');
const editFormCloseButton = editForm.querySelector('.img-upload__cancel');
const imageElement = editForm.querySelector('.img-upload__preview');

const onDocumentEscKeyDown  = (evt) => {
  if (evt.key === 'Escape' && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    editForm.classList.add('hidden');
    document.body.classList.remove('modal-open');

    document.querySelector('#upload-file').value = '';

    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

editFormCloseButton.onclick = () => {
  editForm.classList.add('hidden');
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
