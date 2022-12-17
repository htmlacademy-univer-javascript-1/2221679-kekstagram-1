const uploadControl = document.querySelector('.img-upload__start');
const editForm = document.querySelector('.img-upload__overlay');
const editFormCloseButton = editForm.querySelector('.img-upload__cancel');

const onDocumentEscKeyDown  = (evt) => {
  if (evt.key === 'Escape' && !evt.target.classList.contains('text_hashtags') && !evt.target.classList.contains('text__description')) {
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

  document.addEventListener('keydown', onDocumentEscKeyDown);
};
