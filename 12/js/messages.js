import { keyIsEscape } from './utils.js';
import { closeForm, closeFormWithDefaultSettings } from './upload-form.js';

const bodyElement = document.querySelector('body');

const successfullUploadElement = bodyElement.querySelector('#success').content;
const errorUploadElement = bodyElement.querySelector('#error').content;
const errorElement= bodyElement.querySelector('#load-error').content;

const onDocumentEscKeyDown = (evt) => {
  const message = bodyElement.querySelector('.popup');
  if (keyIsEscape(evt) || !evt.target.classList.contains('inner')){
    bodyElement.removeChild(message);
    document.removeEventListener('keydown', onDocumentEscKeyDown);
    document.removeEventListener('click', onDocumentEscKeyDown);
  }
};

const onMessageButtonClick = () => {
  const message = bodyElement.querySelector('.popup');
  message.querySelector('button').addEventListener('click', () => {
    bodyElement.removeChild(message);
    document.removeEventListener('keydown', onDocumentEscKeyDown);
    document.removeEventListener('click', onDocumentEscKeyDown);
  });
};

const addMessage = (messageElement) => {
  bodyElement.appendChild(messageElement.cloneNode(true));
  onMessageButtonClick();
  document.addEventListener('keydown', onDocumentEscKeyDown);
  document.addEventListener('click', onDocumentEscKeyDown);
};

const loadErrored = () => {
  addMessage(errorElement);
};

const uploadSuccessfully = () => {
  closeFormWithDefaultSettings();
  addMessage(successfullUploadElement);
};


const uploadErrored = () => {
  closeForm();
  addMessage(errorUploadElement);
};

export { uploadSuccessfully, uploadErrored, loadErrored };
